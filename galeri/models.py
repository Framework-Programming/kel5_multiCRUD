from django.db import models

# Create your models here.
class Galeri(models.Model):
    foto_galeri = models.ImageField(upload_to='galeris/')
    deskripsi_galeri = models.CharField(max_length=255)

    class Meta:
        ordering = ['-id']