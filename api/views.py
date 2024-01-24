from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from apps.userman.models import Item
from api.serializers import ItemSerializer

# Create your views here.

class ItemViewset(ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer