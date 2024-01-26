from django.db import models


class Home(models.Model):
    judul = models.CharField(max_length=255)
    deskripsi = models.TextField()
    link_video = models.TextField()

    class Meta:
        ordering = ['-id']


