
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

# urls
urlpatterns = [
    path('api/v1/movies/', include('movies.urls')),
    path('api/v1/auth/', include('authentication.urls')),
    path('api/v1/konsultasi/', include('konsultasi.urls')),
    path('api/v1/sejarah/', include('Sejarah.urls')),
    path('api/v1/berita/', include('berita.urls')),
    path('api/v1/homes/', include('homes.urls')),
    path('api/v1/galeri/', include('galeri.urls')),
    path('admin/', admin.site.urls),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)