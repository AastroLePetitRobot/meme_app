# Generated by Django 4.2.13 on 2024-07-09 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('memes', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meme',
            name='url',
        ),
        migrations.AddField(
            model_name='meme',
            name='file',
            field=models.FileField(default='memes/default.jpg', upload_to='memes/'),
            preserve_default=False,
        ),
    ]
