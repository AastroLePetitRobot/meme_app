from django.db import models

# Create your models here.

class Meme(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    file = models.FileField(upload_to='memes/')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title

