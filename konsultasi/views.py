from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from .models import Konsultasi
from .serializers import KonsultasiSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import RetrieveAPIView


class ListCreateKonsultasiAPIView(ListCreateAPIView):
    serializer_class = KonsultasiSerializer
    queryset = Konsultasi.objects.all()
    permission_classes = [IsAuthenticated]


class YourModelDetailView(RetrieveAPIView):
    serializer_class = KonsultasiSerializer
    queryset = Konsultasi.objects.all()
    permission_classes = [IsAuthenticated]
    lookup_field = 'nomor_konsultasi'

    def get_object(self):
        lookup_value = self.kwargs.get(self.lookup_field)
        queryset = self.filter_queryset(self.get_queryset())
        obj = queryset.filter(**{self.lookup_field: lookup_value}).first()

        if obj is not None:
            self.check_object_permissions(self.request, obj)
            return obj
        else:
            return Response({'detail': 'Not found.'}, status=status.HTTP_404_NOT_FOUND)


class RetrieveUpdateDestroyKonsultasiAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = KonsultasiSerializer
    queryset = Konsultasi.objects.all()
    permission_classes = [IsAuthenticated]
