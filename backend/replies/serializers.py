from rest_framework import serializers
from replies.models import Reply


class ReplySerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    def get_user(self, obj):
        return {'username': obj.user.username, 'id': obj.user.id}

    class Meta:
        model = Reply
        fields = ['id', 'user', 'text', 'comment']
