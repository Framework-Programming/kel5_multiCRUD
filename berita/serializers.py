from rest_framework import serializers
from .models import Berita


class BeritaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Berita
        fields = ["id", "tanggal_berita", "judul_berita", "konten_berita", "sampul_berita", "author_berita", "status_berita",
                  "create_at", "update_at"]
