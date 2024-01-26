from django.urls import path
from . import views


urlpatterns = [
    path('', views.ListCreateBeritaAPIView.as_view(), name='get_post_berita'),
    path('<int:pk>/', views.RetrieveUpdateDestroyBeritaAPIView.as_view(), name='get_delete_update_berita'),
]