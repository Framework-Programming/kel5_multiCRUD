from django.urls import path
from . import views


urlpatterns = [
    path('', views.ListCreateKonsultasiAPIView.as_view(), name='get_post_konsultasi'),
    path('<int:pk>/', views.RetrieveUpdateDestroyKonsultasiAPIView.as_view(), name='get_delete_update_konsultasi'),
    path('konsultasi-detail/<str:nomor_konsultasi>/', views.YourModelDetailView.as_view(), name='your-model-detail'),
]