from rest_framework import serializers
from .models import (
    Gestor,
    Manutentor,
    Responsavel,
    Patrimonio,
    Ambiente,
    OrdemServico,
)

class GestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gestor
        fields = '__all__'

class ManutentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manutentor
        fields = '__all__'

class ResponsavelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responsavel
        fields = '__all__'

class PatrimonioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patrimonio
        fields = '__all__'

class AmbienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambiente
        fields = '__all__'

class OrdemServicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrdemServico
        fields = '__all__'
