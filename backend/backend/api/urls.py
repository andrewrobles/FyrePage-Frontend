from django.urls import path

from . import views

urlpatterns = [
    path('teapot/', views.teapot, name='teapot')
]