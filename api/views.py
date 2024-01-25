from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from apps.userman.models import *
from api.serializers import *

# Create your views here.

class UserViewset(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer