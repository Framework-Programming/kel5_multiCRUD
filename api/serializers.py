from rest_framework.serializers import ModelSerializer
from apps.userman.models import *

class ItemSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id_pengguna','nama_pengguna','password_pengguna']