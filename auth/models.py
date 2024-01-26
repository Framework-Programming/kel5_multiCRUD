from django.db import models
from uuid import uuid4
import os

# Create your models here.
def user_photo(instance, filename):
    ext = filename.split('.')[-1]
    uuid = str(uuid4())
    new_filename = f"user_{uuid}.{ext}"
    
    return os.path.join('static/img', new_filename)

class User(models.Model):
    ADMIN = 'admin'
    PENULIS = 'penulis'

    LEVEL_CHOICES = [
        (ADMIN, 'Admin'),
        (PENULIS, 'Penulis'),
    ]

    id_pengguna = models.CharField(max_length=11)
    nama_pengguna = models.CharField(max_length=50)
    email_pengguna = models.CharField(max_length=50)
    username_pengguna = models.CharField(max_length=50)
    password_pengguna = models.CharField(max_length=255)
    level_pengguna = models.CharField(
        max_length=10,
        choices=LEVEL_CHOICES,
        default=PENULIS
    )
    status_pengguna = models.CharField(max_length=11)
    foto_pengguna = models.ImageField(upload_to=user_photo)

    class Meta:
        ordering = ['-id']