from django.urls import path

from . import views

urlpatterns = [
    path('teapot/', views.teapot, name='teapot'),
    path('sign-in/', views.sign_in, name='sign-in')
]