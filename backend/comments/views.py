from rest_framework import generics
from comments import serializers
from .models import Comment
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


class CommentList(generics.GenericAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializers.CommentSerializer

    def get(self, request, v_id):
        comments = Comment.objects.all()
        if v_id:
            comments = comments.filter(video_id=v_id)
        serializer = self.serializer_class(comments, many=True)
        return Response({
            "status": "success",
            "comments": serializer.data
        })

    @permission_classes([IsAuthenticated])
    def post(self, request):
        if request.user.is_anonymous:
            return Response({
                "status": "fail",
                "msg": "Please login and provide valid JWT token"
            })

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response({
                "status": "success",
                "comment": serializer.data
            }, status=201)


class CommentDetail(generics.GenericAPIView):
    queryset = Comment.objects.all()
    serializer_class = serializers.CommentSerializer

    def get_comment(self, c_id):
        try:
            return Comment.objects.get(id=c_id)
        except:
            return None

    @permission_classes([IsAuthenticated])
    def put(self, request, c_id):
        if request.user.is_anonymous:
            return Response({
                "status": "fail",
                "msg": "Please login and provide valid JWT token"
            })

        comment = self.get_comment(c_id)
        if comment == None:
            return Response({"status": "fail", "message": f"comment with Id: {c_id} not found"}, status=404)

        serializer = self.serializer_class(
            comment, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "comment": serializer.data})
        return Response({"status": "fail", "message": serializer.errors}, status=400)
