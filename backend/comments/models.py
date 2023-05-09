from django.db import models
from authentication.models import User

# Create your models here.
class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    video_id = models.CharField(max_length=100, blank=True, default='')
    text = models.CharField(max_length=300, blank=True, default='')
    likes = models.IntegerField(blank=True, default=0)
    dislikes = models.IntegerField(blank=True, default=0)

    class Meta:
        ordering = ['created']
