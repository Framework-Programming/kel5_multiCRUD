from django.db import models

# Create your models here.
class Item(models.Model):
    id_pengguna = models.CharField(max_length=11)
    nama_pengguna = models.CharField(max_length=50)
    email_pengguna = models.CharField(max_length=50)
    username_pengguna = models.CharField(max_length=50)
    password_pengguna = models.CharField(max_length=255)
    # level_pengguna
    status_pengguna = models.CharField(max_length=11)
    # foto_pengguna

    def __str__(self):
        return self.id_pengguna, self.nama_pengguna, self.password_pengguna