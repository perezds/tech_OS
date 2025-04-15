from django.urls import path
from .views import *
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
 
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),


    path('gestores', GestorView.as_view()),
    path('gestores/<int:pk>', GestorDetailView.as_view()),


    path('manutentores', ManutentorView.as_view()),
    path('manutentores/<int:pk>', ManutentorDetailView.as_view()),



    path('responsaveis/', ResponsavelView.as_view()),  
    path('responsaveis/<int:pk>/', ResponsavelDetailView.as_view()),
      # path('responsaveis/', ResponsavelList.as_view(), name='responsaveis-list'), 

    path('patrimonios/', PatrimonioView.as_view()),
    path('patrimonios/<int:pk>/', PatrimonioDetailView.as_view()),


    path('ambientes', AmbienteView.as_view()),
    path('ambientes/<int:pk>', AmbienteDetailView.as_view()),

    path('ordens-servico', OrdemServicoView.as_view()),
    path('ordens-servico/<int:pk>', OrdemServicoDetailView.as_view()),

    path('create-user/', UserRegistrationView.as_view(), name='create-user')
]
            