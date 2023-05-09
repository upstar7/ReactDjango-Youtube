from rest_framework import serializers
from replies.models import Reply


class ReplySerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    
    
    class Meta:
        model = Reply
        fields = ['id', 'user', 'text', 'comment']
