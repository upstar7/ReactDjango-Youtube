from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    replies = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    
    class Meta:
        model = Comment
        fields = ['id', 'user', 'text', 'likes', 'dislikes', 'video_id', 'replies']
