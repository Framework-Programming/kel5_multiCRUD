from django.db import models
import os
from uuid import uuid4


def file_image(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (str(uuid4()), ext)
    return os.path.join('static/img', filename)

# Create your models here.


class Berita(models.Model):
    tanggal_berita = models.DateTimeField(auto_now_add=True)
    judul_berita = models.CharField(max_length=255)
    konten_berita = models.TextField()
    sampul_berita = models.ImageField(
        upload_to=file_image, verbose_name='Sampul Berita', null=True, blank=True)
    author_berita = models.IntegerField()
    status_berita = models.CharField(max_length=255)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-id']
