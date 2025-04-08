from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from .models import (
    Gestor, Responsavel, Manutentor, Ambiente,
    Patrimonio, OrdemServico
)
from .serializer import (
    GestorSerializer, ResponsavelSerializer, ManutentorSerializer,
    AmbienteSerializer, PatrimonioSerializer, OrdemServicoSerializer
)

class GestorView(ListCreateAPIView):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer
    permission_classes = [IsAuthenticated]

class GestorDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Gestor.objects.all()
    serializer_class = GestorSerializer
    permission_classes = [IsAuthenticated]


class ResponsavelView(ListCreateAPIView):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSerializer
    permission_classes = [IsAuthenticated]

class ResponsavelDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Responsavel.objects.all()
    serializer_class = ResponsavelSerializer
    permission_classes = [IsAuthenticated]


class ManutentorView(ListCreateAPIView):
    queryset = Manutentor.objects.all()
    serializer_class = ManutentorSerializer
    permission_classes = [IsAuthenticated]

class ManutentorDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Manutentor.objects.all()
    serializer_class = ManutentorSerializer
    permission_classes = [IsAuthenticated]


class AmbienteView(ListCreateAPIView):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    permission_classes = [IsAuthenticated]

class AmbienteDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    permission_classes = [IsAuthenticated]


class PatrimonioView(ListCreateAPIView):
    queryset = Patrimonio.objects.all()
    serializer_class = PatrimonioSerializer
    permission_classes = [IsAuthenticated]

class PatrimonioDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Patrimonio.objects.all()
    serializer_class = PatrimonioSerializer
    permission_classes = [IsAuthenticated]


class OrdemServicoView(ListCreateAPIView):
    queryset = OrdemServico.objects.all()
    serializer_class = OrdemServicoSerializer
    permission_classes = [IsAuthenticated]

class OrdemServicoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = OrdemServico.objects.all()
    serializer_class = OrdemServicoSerializer
    permission_classes = [IsAuthenticated]

