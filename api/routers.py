from rest_framework.routers import DefaultRouter
from api.views import ItemViewset  

router: DefaultRouter = DefaultRouter()

router.register(r'item', ItemViewset)