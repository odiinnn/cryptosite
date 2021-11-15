import os
from django.shortcuts import render, redirect, get_object_or_404
from .models import Task, Streamers, Userprofile, Item, Inventory, MarketModel, Balance1
from django.urls import reverse, reverse_lazy
from django.contrib.auth.views import LoginView, LogoutView
from django.views.generic import CreateView
from django.contrib.auth.models import User
from django.contrib import messages
from .forms import AuthUserForm, RegisterUserForm, MarketForm
from itertools import chain
from .config import private
import requests
import time
import random
import json
from web3 import Web3


weqyruywetq = 1



def index(request):
    tasks = Task.objects.all()
        #username = request.session.get('uid', True)
    return render(request, 'main/index.html', {'title': 'Главная страница сайта', 'tasks': tasks}) #, 'username': username})
    #else:
       # return redirect('reg')


def shop(request):
    return render(request, 'main/shop.html') #, 'username': username})


def tokensale(request):
    # wallett = 'qwer'
    # wallet = Wallet.objects.all()
    # if request.method == 'POST':
    #     Inventory.objects.filter(id=1).update(wallet=wallett)
    #     print('wallet', wallett)
    # elif request.method == 'GET':
    #     wallett = request.GET.get('wallett')
    #     Wallet.objects.filter(id=1).update(wallet=wallett)

    return render(request, 'main/tokensale.html')


def top_up_balance(request):
    amount = 0
    if request.method == 'POST':
        # Wallet.objects.filter(id=1).update(wallet=amount)
        print('amount', amount)
    elif request.method == 'GET':
        amount = int(request.GET.get('amount'))
        Balance1.objects.filter(username=request.user).update(balance=amount)
        balance = Userprofile.objects.get_by_natural_key(username=request.user)
        balance1 = Balance1.objects.get_by_natural_key(username=request.user)
        new_balance = balance.balance + int(balance1.balance or 0)
        Userprofile.objects.filter(username=request.user).update(balance=new_balance)
        Balance1.objects.filter(username=request.user).update(balance=0)


    return render(request, 'main/top_up_balance.html', {'amount': amount})


def market(request):
    # buffer = MarketModel.objects.order_by('-id')
    # price_of_items = MarketModel.objects.filter(price__in=buffer)
    buffer = Inventory.objects.filter(check=1)
    item_for_sale = Item.objects.filter(inventory__in=buffer)
    # result = buffer.entry_set.create(
    #     price=MarketModel.price
    # )
    print(item_for_sale)
    print(buffer)
    # print(price_of_items)
    # print("result", result)

    return render(request, 'main/marketplace.html', {'item_for_sale': item_for_sale, 'buffer': buffer})


# class Sell():
def sell(request):
    error = 'gratz'
    item_id = ''
    user = request.user
    form = MarketForm()
    if request.method == 'POST':
        Inventory.objects.filter(user=user, id=request.GET.get('name'), count=1).update(check=1, price=request.POST.get('price'))
        messages.success(request, "You have put up your token for sale")
        return redirect('home')
        error = 'form is invalid'
    context = {

        'form': form,
        'error': error
    }
    return render(request, 'main/sell.html', context)


def enter_price(request):
    if request.method == 'POST':
        form = MarketForm(request.GET)
        if form.is_valid():
            print(form.cleaned_data['price'])
            form.save()
            return render(request, 'main/enterprice.html')
    else:
        price = 0
        form = MarketModel(price=price)
        form.save()

    return render(request, 'main/enterprice.html')


def add2(request):
    if request.method == 'GET':
        abc = request.GET.get('abc')
        model = Inventory(user=request.user, item_id=abc, count="1")
        model.save()
    return render(request, 'main/profile.html')


def add1(request):
    # messages.warning(request, 'Now go and watch stream to get NFT\'s!')
    treck = True
    while treck == True:
        a = random.randint(0, 10)
        print('time:', a)
        check(request)
        global weqyruywetq
        print(weqyruywetq, 'tyqwetuqtqiu')
        if weqyruywetq == 0:
            print('user not found')
            # messages.warning(request, "user not found")
            treck = False
            return redirect('streamers')
        # if weqyruywetq == 0:
        #     print('user not found')
        #     messages.warning(request, "user not found")
        #     return redirect('home')
        #     treck = False
        else:
            time.sleep(a)
            # return redirect('https://www.twitch.tv/')
    # return render(request, 'main/about.html')


def check(request):
    client_username = str(request.user)
    print(client_username)
    client_id = ''
    client_secret = ''
    streamer_name = 'qwer' #streamersform -> title

    body = {
        'client_id': client_id,
        'client_secret': client_secret,
        "grant_type": 'client_credentials'
    }
    r = requests.post('https://id.twitch.tv/oauth2/token', body)

    #data output
    keys = r.json()

    print(keys)

    headers = {
        'Client-ID': client_id,
        'Authorization': 'Bearer ' + keys['access_token']
    }

    print(headers)

    stream = requests.get('https://api.twitch.tv/helix/streams?user_login=' + streamer_name, headers=headers)

    stream_data = stream.json()

    print(stream_data)

    if len(stream_data['data']) == 1:
        print(streamer_name + ' is live: ' + stream_data['data'][0]['title'] + ' playing ' + stream_data['data'][0]['game_name'])
        url = 'https://tmi.twitch.tv/group/user/qwer/chatters' 

        params = dict(
            chatters='chatters'
        )

        resp = requests.get(url=url, params=params)
        data = resp.json()  # Check the JSON Response Content documentation below
        print(data['chatters']['viewers'])
        data1 = data['chatters']['viewers']
        data2 = data['chatters']['vips']
        data3 = data['chatters']['moderators']
        data4 = data['chatters']['staff']
        data5 = data['chatters']['admins']
        data6 = data['chatters']['global_mods']


        # if data1[i] == '' :
        try:
            for i in range(len(data1)):
                if client_username in data1[i]:
                    model = Inventory(user=request.user, item_id=1, count="1") # add to all if's / randomise tokens /
                    model.save()                                               # connect to streamers tokens collections

                    print(data1[i])
            for i in range(len(data2)):
                if client_username in data2[i]:

                    print(data2[i])
            for i in range(len(data3)):
                if client_username in data3[i]:

                    print(data3[i])
            for i in range(len(data4)):
                if client_username in data4[i]:

                    print(data4[i])
            for i in range(len(data5)):
                if client_username in data5[i]:

                    print(data5[i])
            for i in range(len(data6)):
                if client_username in data6[i]:

                    print(data6[i])
        except:
            print('user not found')
            messages.warning(request, "user not found")
            global weqyruywetq
            weqyruywetq = 0
            print(weqyruywetq)
            return redirect('streamers')

        messages.warning(request, streamer_name + ' is live. ' 'Now go and watch stream to get NFT\'s!')
        return redirect('streamers')

    else:
        print(streamer_name + ' is not live')
        messages.warning(request, streamer_name + ' is not live')
        weqyruywetq = 0
        print(weqyruywetq)
        return redirect('streamers')


def regwtw(request):
    Userprofile.objects.filter().update()
    success_url = reverse_lazy('home')
    return render(request, 'main/tw.html')


def about(request):
    form = MarketForm()
    context = {
        'form': form
    }
    return render(request, 'main/about.html', context)


def profile(request):
    balance = Userprofile.objects.get_by_natural_key(username=request.user)
    print('qwer', balance.balance)
    # balance = User.objects.filter(user=request.user)
    content = Inventory.objects.filter(user=request.user)

    item = Item.objects.filter(inventory__in=content)
    items = Item.objects.filter()
    # price = MarketModel.objects.filter()
    #content = get_object_or_404(Inventory)
    return render(request, 'main/profile.html', {'balance': balance,
                                                 'content': content,
                                                 'item': item,
                                                 'items': items,
                                                 })

    #item = get_object_or_404(Item)


def streamers(request):
    streamer = get_object_or_404(Streamers)
    return render(request, 'main/streamers.html', {'streamer': streamer})


class Login(LoginView):
    template_name = 'main/login.html'
    form_class = AuthUserForm
    success_url = reverse_lazy('home')

    def get_success_url(self):
        return self.success_url


class Register(CreateView):
    model = Userprofile()
    template_name = 'main/registration.html'
    form_class = RegisterUserForm
    success_url = reverse_lazy('home')


class Logout(LogoutView):
    next_page = reverse_lazy('home')


class Market(CreateView):
    model = MarketModel
    next_page = reverse_lazy('home')


def itemsforsale(request):
    content = Inventory.objects.filter(user=request.user)
    item = Item.objects.filter(inventory__in=content)
    # price = MarketModel.objects.filter()
    # content = get_object_or_404(Inventory)
    return render(request, 'main/itemsforsale.html', {
                                                 'content': content,
                                                 'item': item,
                                                 })


def buy(request):
    user = request.user
    balance = Userprofile.objects.get_by_natural_key(username=request.user)
    # balance = User.objects.get_by_natural_key(username=request.user)
    print(balance.balance, 'balance')
    form = Inventory.objects.filter(id=request.GET.get('name'))[0]
    balance1 = Userprofile.objects.get_by_natural_key(username=form.user)
    admin_balance = Userprofile.objects.get_by_natural_key(username='admin')
    comission = form.price * 0.05
    print('dasff', comission)

    print(balance1, 'form')
    print(balance1.balance, 'form')
    print(form.price, 'form')
    print(form.user_id)
    if balance.balance >= form.price:
        Inventory.objects.filter(id=request.GET.get('name'), count=1).update(user=user, check=0,
                                                                             price=request.POST.get('price'))
        print(balance.balance-form.price, '1')
        Userprofile.objects.filter(username=user).update(balance=balance.balance-form.price)
        balance2 = Userprofile.objects.get_by_natural_key(username=form.user)
        print(balance2.balance+form.price, '2')
        Userprofile.objects.filter(username=form.user).update(balance=balance2.balance+form.price-comission)
        Userprofile.objects.filter(id=1).update(balance=admin_balance.balance + comission)
        messages.success(request, "You bought token. Check your inventory")
        return redirect('home')
    else:
        messages.warning(request, "You haven\' t got enoght money for it!")
        return redirect('home')


def get_back(request):
    user = request.user
    balance = Userprofile.objects.get_by_natural_key(username=request.user)
    # balance = User.objects.get_by_natural_key(username=request.user)
    print(balance.balance, 'balance')
    form = Inventory.objects.filter(id=request.GET.get('name'))[0]
    balance1 = Userprofile.objects.get_by_natural_key(username=form.user)
    print(balance1, 'form')
    print(balance1.balance, 'form')
    print(form.price, 'form')
    print(form.user_id)

    Inventory.objects.filter(id=request.GET.get('name'), count=1).update(user=user, check=0,
                                                                         price=0)
    print(balance.balance-form.price, '1')
    Userprofile.objects.filter(username=user).update(balance=balance.balance-form.price)
    balance2 = Userprofile.objects.get_by_natural_key(username=form.user)
    print(balance2.balance+form.price, '2')
    Userprofile.objects.filter(username=form.user).update(balance=balance2.balance+form.price)
    messages.success(request, "You removed your token from market")
    return redirect('home')



# def aaa(request):
#     # print('ads')
#     balance = web3.eth.get_balance(MyAddress)
#     # print(balance)
#     result = web3.fromWei(balance, 'ether')
#     #print(result)
#     contract = web3.eth.contract(address=contract_address, abi=abi)
#     totalSupply = contract.functions.decimals().call()
#     # print(totalSupply)
#     name = contract.functions.name().call()
#     # print(contract.functions.name().call())
#     symbol = contract.functions.symbol().call()
#     # print(contract.functions.symbol().call())
#     address = web3.toChecksumAddress(MyAddress)
#     balance1 = contract.functions.balanceOf(address).call()
#     qwer = web3.fromWei(balance1, 'ether')
#     # print(web3.fromWei(balance1, 'ether'))
#     if request.method == 'GET':
#         address_to1 = ''
#         address_to = Web3.toChecksumAddress(address_to1)
#         nonce = web3.eth.getTransactionCount(MyAddress)
#         print(nonce)
#         send = 1000
#         amount = web3.toWei(send, 'ether')
#         # balanceOf = contract.functions.balanceOf(address_to).call()
#         token_tx = contract.functions.transfer(address_to, amount).buildTransaction({
#             'chainId': 56, 'gas': 100000, 'gasPrice': web3.toWei('10', 'gwei'), 'nonce': nonce
#         })
#
#         sign_tx = web3.eth.account.signTransaction(token_tx, private_key=private)#os.environ['PRIVATE_KEY']), private_key=private)
#         # web3.eth.sendRawTransaction(sign_tx.rawTransaction, private_key=os.environ['PRIVATE_KEY'])
#         web3.toHex(web3.eth.sendRawTransaction(sign_tx.rawTransaction))
#         print(f'Trans has been sent to{address_to}')
#
#         # build a transaction in a dictionary
#
#         #contract.functions.allowance(address, address)
#     context = {
#         'balance': balance,
#         'result': result,
#         'totalSupply': totalSupply,
#         'name': name,
#         'symbol': symbol,
#         'address': address,
#         'qwer': qwer
#     }
#     return render(request, 'main/blockchain.html', context)