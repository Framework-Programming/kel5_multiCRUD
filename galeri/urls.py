from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.ListCreateGaleri.as_view(), name='get_post_galeri'),
    path('<int:pk>/', views.RetrieveUpdateDestroyGaleri.as_view(), name='get_delete_update_galeri'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)