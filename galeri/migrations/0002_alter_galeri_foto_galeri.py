# Generated by Django 4.2.6 on 2024-01-24 05:34

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("galeri", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="galeri",
            name="foto_galeri",
            field=models.ImageField(upload_to="galeris/"),
        ),
    ]
