from rest_framework import serializers
from .models import Konsultasi

    
class KonsultasiSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Konsultasi
        fields = ["id","nomor_konsultasi", "nama", "wa_konsultasi", "isi_konsultasi", "tgl_konsultasi", "tgl_jawab_konsultasi", "jawab_konsultasi", 
        "berkas_jawab_konsultasi", "berkas_konsultasi", "created_at", "updated_at", "status_konsultasi"]
        lookup_field = 'nomor_konsultasi'