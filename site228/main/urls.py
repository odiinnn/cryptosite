from django.urls import path, include
from . import views
from .views import profile
from django.conf import settings
from allauth.socialaccount import providers
from importlib import import_module

urlpatterns = [
    #path('', views.reg, name='reg'),
    path('', views.index, name='home'),
    path('streamers', views.streamers, name='streamers'),
    path('logout', views.Logout.as_view(), name='logout'),
    path('login', views.Login.as_view(), name='login'),
    path('profile', profile, name='profile'),
    path('add1', views.add1, name='add1'),
    path('add2', views.add2, name='add2'),
    path('marketplace', views.market, name='market'),
    path('sell', views.sell, name='sell'),
    path('enterprice', views.enter_price, name='enter_price'),
    path('itemsforsale', views.itemsforsale, name='itemsforsale'),
    path('buy', views.buy, name='buy'),
    path('shop', views.shop, name='shop'),
    path('get_back', views.get_back, name='get_back'),
    path('tokensale', views.tokensale, name='tokensale'),
    path('top_up_balance', views.top_up_balance, name='top_up_balance'),




]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# if main_settings.SOCIALACCOUNT_ENABLED:
#     urlpatterns += [path("social/", include("allauth.socialaccount.urls"))]
#
# # Provider urlpatterns, as separate attribute (for reusability).
# provider_urlpatterns = []
# for provider in providers.registry.get_list():
#     try:
#         prov_mod = import_module(provider.get_package() + ".urls")
#     except ImportError:
#         continue
#     prov_urlpatterns = getattr(prov_mod, "urlpatterns", None)
#     if prov_urlpatterns:
#         provider_urlpatterns += prov_urlpatterns
# urlpatterns += provider_urlpatterns
