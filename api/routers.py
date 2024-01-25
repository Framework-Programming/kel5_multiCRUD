from rest_framework.routers import DefaultRouter
from api.views import UserViewset  

router: DefaultRouter = DefaultRouter()

router.register(r'user', UserViewset)