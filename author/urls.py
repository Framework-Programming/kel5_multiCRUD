from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListCreateUserAPIView.as_view(), name='get_post_user'),
]