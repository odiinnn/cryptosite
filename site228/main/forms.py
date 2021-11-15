from .models import Task, Streamers, Userprofile, Item, Inventory, MarketModel, Balance1
from django.forms import ModelForm, TextInput
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User


class TaskForm(ModelForm):
    class Meta:
        model = Task
        fields = ["title", "task"]


# class UserForm(ModelForm):
#     class Meta:
#         model = User
#         fields = ["username", "password", "session"]
#         widgets = {"username": TextInput(attrs={
#             'class': 'fas fa-lock',
#             "placeholder": "Username"
#             }),
#             "password": TextInput(attrs={
#                 'class': 'fas fa-lock',
#                 "placeholder": "Password"
#             }),
#         }
#


class StreamersForm(ModelForm):
    class Meta:
        model = Streamers
        fields = ["title", "image"]


class BalanceForm(ModelForm):
    class Meta:
        model = Balance1
        fields = ["balance"]


class AuthUserForm(AuthenticationForm, ModelForm):
    class Meta:
        model = Userprofile
        fields = ["username", "password"]
        widgets = {"username": TextInput(attrs={
            'class': 'fas fa-lock',
            "placeholder": "Username"
        }),
            "password": TextInput(attrs={
                'class': 'fas fa-lock',
                "placeholder": "Password"
            }),

        }


class RegisterUserForm(ModelForm):
    class Meta:
        model = Userprofile
        fields = ["username", "password"]
        widgets = {"username": TextInput(attrs={
            'class': 'fas fa-lock',
            "placeholder": "Username"
        }),
            "password": TextInput(attrs={
                'class': 'fas fa-lock',
                "placeholder": "Password"
            }),

        }

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password"])
        if commit:
            user.save()
        return user


class MarketForm(ModelForm):
    class Meta:
        model = Inventory
        fields = ["price"]
        widgets = {"price": TextInput(attrs={
            # 'class': 'edit bk',
            "placeholder": "price",
            'required pattern': "[0-9 .]+",
            'required minlength': '1',
            'required maxlength': "50",
            'id': 'sell_form',
            'style' : "border: 2px solid #33006E; border-radius: 25px; width: 347px; height: 50px;margin-left: 12%; margin-top: 5%; margin-bottom: 3%; padding-left: 45px;",
            'oninput': 'qwer()',
            })
        }





