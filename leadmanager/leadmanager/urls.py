
from django.contrib import admin
from django.urls import path , include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')), # Frontend should load before any application !
    path('', include('leads.urls'))
]
