from django.db import models
from comments.models import Comment
from authentication.models import User

# Create your models here.

class Reply(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(
        User, related_name='replies', on_delete=models.CASCADE)
    comment = models.ForeignKey(
        Comment, related_name='replies', on_delete=models.CASCADE)
    text = models.CharField(max_length=300, blank=True, default='')


class Meta:
    ordering = ['created']
    class Meta:
        ordering = ['created']
