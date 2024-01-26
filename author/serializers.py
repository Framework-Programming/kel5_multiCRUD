from rest_framework.serializers import ModelSerializer
from .models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id_pengguna','email_pengguna','nama_pengguna','level_pengguna']