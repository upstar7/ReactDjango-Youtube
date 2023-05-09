from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from replies import views

urlpatterns = [
    path('comment_id/<int:c_id>', views.ReplyList.as_view()),
    path('', views.ReplyList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
