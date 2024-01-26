from django.urls import path
from . import views


urlpatterns = [
    path('', views.ListCreateSejarahAPIView.as_view(), name='get_post_sejarah'),
    path('<int:pk>/', views.RetrieveUpdateDestroySejarahAPIView.as_view(),
         name='get_delete_update_sejarah'),
]