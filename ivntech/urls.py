"""ivntech URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,re_path
from apps import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home,name='Main_page'),
    re_path(r'^about_us/$', views.about_us, name='about_us'),
    re_path(r'^services/$', views.services, name='services'),
    re_path(r'^solutions/$', views.solutions, name='solutions'),
    re_path(r'^training/$', views.training, name='training'),
    re_path(r'^project/$', views.project, name='project'),
    re_path(r'^contact/$', views.contact, name='contact'),
    re_path(r'^Banking/$', views.banking, name='Banking'),
    re_path(r'^Construction/$', views.healthcare, name='Construction'),
    re_path(r'^Healthcare/$', views.retail, name='Healthcare'),
    re_path(r'^Insurance/$', views.insurance, name='Insurance'),
    re_path(r'^Retail/$', views.construction, name='Retail'),
     re_path(r'^Hr_management/$', views.hrmanagement, name='Hr_management'),
]


