from django.db import models


class Gestor(models.Model):
    ni = models.CharField(max_length=20, unique=True)
    nome = models.CharField(max_length=255)
    area = models.CharField(max_length=100)
    cargo = models.CharField(max_length=100)

    def __str__(self):
        return self.nome


class Manutentor(models.Model):
    ni = models.CharField(max_length=20, unique=True)
    nome = models.CharField(max_length=255)
    area = models.CharField(max_length=100)
    gestor = models.ForeignKey(Gestor, on_delete=models.SET_NULL, null=True, related_name='manutentores')

    def __str__(self):
        return self.nome


class Responsavel(models.Model):
    ni = models.CharField(max_length=20, unique=True)
    nome = models.CharField(max_length=255)

    def __str__(self):
        return self.nome


class Patrimonio(models.Model):
    ni = models.CharField(max_length=20, unique=True, null=True, blank=True)
    descricao = models.TextField()
    localizacao = models.CharField(max_length=255)

    def __str__(self):
        return self.ni or "Sem número de patrimônio"


class Ambiente(models.Model):
    ni = models.CharField(max_length=20, unique=True)
    nome = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ni} - {self.nome}"


class OrdemServico(models.Model):
    STATUS_CHOICES = [
        ('iniciada', 'Iniciada'),
        ('em_andamento', 'Em Andamento'),
        ('finalizada', 'Finalizada'),
        ('cancelada', 'Cancelada'),
    ]

    PRIORIDADE_CHOICES = [
        ('alta', 'Alta'),
        ('media', 'Média'),
        ('baixa', 'Baixa'),
    ]

    descricao = models.TextField()
    abertura = models.DateTimeField(auto_now_add=True)
    fechamento = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=15, choices=STATUS_CHOICES)
    prioridade = models.CharField(max_length=10, choices=PRIORIDADE_CHOICES)
    
    patrimonio = models.ForeignKey(Patrimonio, on_delete=models.SET_NULL, null=True, blank=True)
    ambiente = models.ForeignKey(Ambiente, on_delete=models.PROTECT)
    manutentor = models.ForeignKey(Manutentor, on_delete=models.PROTECT)
    responsavel = models.ForeignKey(Responsavel, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"OS#{self.id} - {self.status}"
