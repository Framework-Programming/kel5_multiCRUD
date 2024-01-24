from django.db import models

# Create your models here.
class Item(models.Model):
    id_pengguna = models.IntegerField(max_length=11)
    nama_pengguna = models.CharField(max_length=50)
    # email_pengguna
    # username_pengguna
    # password_pengguna
    # level_pengguna
    # status_pengguna
    # foto_pengguna

    def __str__(self):
        return self.name