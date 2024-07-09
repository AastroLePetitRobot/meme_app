from django.urls import path
from .views import MemeListCreate

urlpatterns = [
    path('api/memes/', MemeListCreate.as_view(), name='meme-list-create'),
]
