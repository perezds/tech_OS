from django.contrib import admin
from .models import Gestor, Manutentor, Responsavel, Patrimonio, Ambiente, OrdemServico

admin.site.register(Gestor)
admin.site.register(Manutentor)
admin.site.register(Responsavel)
admin.site.register(Patrimonio)
admin.site.register(Ambiente)
admin.site.register(OrdemServico)

