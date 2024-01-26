from django.shortcuts import render

# Create your views here.
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Berita
from django_filters import rest_framework as filters
from .serializers import BeritaSerializer


class ListCreateBeritaAPIView(ListCreateAPIView):
    serializer_class = BeritaSerializer
    queryset = Berita.objects.all()
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        elif self.request.method == 'POST':
            return [IsAuthenticated()]
        return super().get_permissions()


class RetrieveUpdateDestroyBeritaAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = BeritaSerializer
    queryset = Berita.objects.all()
    permission_classes = [IsAuthenticated]
