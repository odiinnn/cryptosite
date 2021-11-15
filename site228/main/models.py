from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):
    title = models.CharField('Название', max_length=50)
    task = models.TextField('Описание')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Задача'
        verbose_name_plural = 'Задачи'


# class User(models.Model):
#     username = models.CharField('username', max_length=50)
#     password = models.CharField('password',  max_length=50)
#     # session = models.CharField('session', max_length=50)
#
#     def __str__(self):
#         return self.username
#
#     class Meta:
#         verbose_name = 'Пользователь'
#         verbose_name_plural = 'Пользователи'


class Streamers(models.Model):
    title = models.CharField('Имя', max_length=50)
    image = models.ImageField(upload_to='images')


    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Стример'
        verbose_name_plural = 'Стримеры'


class Userprofile(User):
    balance = models.FloatField('balance', default=0)


# class Userinventory(User):
#     inventory = models.ManyToManyField(Items, blank=True, related_name='related')
# class StreamersItems(models.Model):
#     title = models.CharField('Имя стримера', max_length=50)
#     slug = models.SlugField(unique=True)
#
#     def __str__(self):
#         return self.title
#
#     class Meta:
#         verbose_name = 'Стример'
#         verbose_name_plural = 'Айтемы стримеров'


class Item(models.Model):

    title = models.CharField(max_length=50, verbose_name="Название")
    image = models.ImageField(upload_to='images', verbose_name="Изображение")


class Inventory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.DO_NOTHING)
    count = models.IntegerField()
    check = models.IntegerField(default=0)
    price = models.CharField(default=0, max_length=50)


class MarketModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.DO_NOTHING)
    price = models.CharField(default=0, max_length=50)
    check = models.IntegerField(default=0)


class Balance1(User):
    balance = models.FloatField(verbose_name="balance", null=True, default=0)














