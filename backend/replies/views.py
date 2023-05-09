from .models import Reply
from comments.models import Comment
from rest_framework import generics
from replies import serializers
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated


class ReplyList(generics.GenericAPIView):
    queryset = Reply.objects.all()
    serializer_class = serializers.ReplySerializer

    @permission_classes([IsAuthenticated])
    def get(self, request, c_id):
        if request.user.is_anonymous:
            return Response({
                "status": "fail",
                "msg": "Please login and provide valid JWT token"
            })
        replies = Reply.objects.all()
        if c_id:
            replies = replies.filter(comment=c_id)
        serializer = self.serializer_class(replies, many=True)

        if len(serializer.data):
            return Response({
                "status": "success",
                "replies": serializer.data
            })
        else:
            return Response({
                "status": 'success',
                'replies': serializer.data
            })

    @permission_classes([IsAuthenticated])
    def post(self, request):
        if request.user.is_anonymous:
            return Response({
                "status": "fail",
                "msg": "Please login and provide valid JWT token"
            })
        c_id = request.data['comment']
        try:
            comment = Comment.objects.get(id=c_id)
        except:
            comment = None
        if comment == None:
            return Response({"status": "fail", "msg": f"comment with Id: {c_id} not found"}, status=404)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response({
                "status": "success",
                "reply": serializer.data
            }, status=201)
        return Response({"status": "fail", "message": serializer.errors}, status=400)