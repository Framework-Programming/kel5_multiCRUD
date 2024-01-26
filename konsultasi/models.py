from django.db import models

# Create your models here.
class Konsultasi(models.Model):
    nomor_konsultasi = models.CharField(max_length=50)
    nama = models.CharField(max_length=255)
    wa_konsultasi = models.CharField(max_length=15)
    isi_konsultasi = models.TextField()	
    tgl_konsultasi = models.DateTimeField(auto_now_add=True)
    tgl_jawab_konsultasi = models.DateField()
    jawab_konsultasi = models.TextField()	
    berkas_jawab_konsultasi = models.ImageField(null=True, blank=True,
                              upload_to="image/konsultasi-jawab/")
    berkas_konsultasi = models.ImageField(null=True, blank=True,
                              upload_to="image/konsultasi/")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status_konsultasi = models.IntegerField()

    class Meta:
        ordering = ['-id']