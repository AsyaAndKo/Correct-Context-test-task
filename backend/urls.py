from rest_framework import routers
from .api import APIViewSet


router = routers.DefaultRouter()
router.register('api/api', APIViewSet, 'api')

urlpatterns = router.urls
