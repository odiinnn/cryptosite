from django.contrib import admin
from .models import Task, Streamers, Item, Inventory, MarketModel


admin.site.register(Task)
#admin.site.register(User)
admin.site.register(Streamers)
admin.site.register(Item)
admin.site.register(Inventory)
admin.site.register(MarketModel)

