# Generated by Django 3.1.8 on 2024-01-23 08:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Sejarah', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sejarah',
            name='id_sejarah',
        ),
    ]