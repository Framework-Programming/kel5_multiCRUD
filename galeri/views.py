from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
# from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .models import Galeri
from .serializers import GaleriSerializer
from .pagination import CustomPagination


class ListCreateGaleri(ListCreateAPIView):
    serializer_class = GaleriSerializer
    queryset = Galeri.objects.all()
    pagination_class = CustomPagination
    # permission_classes = [IsAuthenticated]

class RetrieveUpdateDestroyGaleri(RetrieveUpdateDestroyAPIView):
    serializer_class = GaleriSerializer
    queryset = Galeri.objects.all()
    # permission_classes = [IsAuthenticated]