from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('', views.CommentList.as_view()),
    path('video_id/<str:v_id>', views.CommentList.as_view()),
    path('comment_id/<int:c_id>', views.CommentDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
