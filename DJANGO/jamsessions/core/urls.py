from django.urls import path
from.views import LoginView, DashView, CadastroView, MensagemView

urlpatterns = [
    path('login', LoginView.as_view(), name='login'),
    path('dashboard', DashView.as_view(), name='dashboard'),
    path('cadastro', CadastroView.as_view(), name='cadastro'),
    path('mensagem', MensagemView.as_view(), name='mensagem'),
]
