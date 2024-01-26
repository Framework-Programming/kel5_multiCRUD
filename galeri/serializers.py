from rest_framework import serializers
from .models import Galeri

class GaleriSerializer(serializers.ModelSerializer):
   foto_galeri = serializers.ImageField(max_length=None, use_url=True)

   class Meta:
       model = Galeri
       fields = ['id','foto_galeri','deskripsi_galeri']