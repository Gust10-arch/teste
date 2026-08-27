# Tabela Periódica

Site educacional para consulta rápida da Tabela Periódica, com uma interface interativa para pesquisa, filtros por categoria e visualização de informações dos elementos.

## Backend Django + Djoser + JWT

O projeto agora inclui uma API REST em `backend/`, baseada no estudo dirigido fornecido. O backend usa **Django**, **Django REST Framework**, **Djoser** e **Simple JWT**, com autenticação por e-mail, refresh automático de tokens e CORS habilitado para o frontend estático.

### Estrutura

```text
backend/
├── manage.py
├── requirements.txt
├── core/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
└── accounts/
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── tests.py
    └── migrations/
```

### Instalação e execução

A partir da raiz do repositório:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate       # Linux/macOS
# .venv\\Scripts\\activate    # Windows
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

A API ficará disponível em `http://127.0.0.1:8000/`. Para criar um usuário administrador do painel Django, execute:

```bash
python manage.py createsuperuser
```

O frontend atual continua sendo executado como site estático. Em outro terminal, a partir da raiz do projeto, use por exemplo:

```bash
python -m http.server 5500
```

Depois, acesse `http://127.0.0.1:5500/tabela_interativa/`.

### Endpoints de autenticação

| Método | Endpoint | Acesso | Finalidade |
| --- | --- | --- | --- |
| GET | `/api/v1/health/` | Público | Verificar se a API está disponível |
| POST | `/api/v1/auth/users/` | Público | Criar uma conta com `email`, `password` e `re_password` |
| POST | `/api/v1/auth/jwt/create/` | Público | Fazer login e obter `access` e `refresh` |
| POST | `/api/v1/auth/jwt/refresh/` | Público | Renovar os tokens usando o `refresh` |
| POST | `/api/v1/auth/jwt/verify/` | Público | Verificar a validade de um token |
| GET | `/api/v1/auth/users/me/` | JWT | Obter os dados do usuário autenticado |
| PUT/PATCH | `/api/v1/auth/users/me/` | JWT | Atualizar os dados do usuário autenticado |
| DELETE | `/api/v1/auth/users/me/` | JWT | Excluir a conta autenticada |
| GET | `/admin/` | Administrador | Acessar o painel administrativo |

As requisições protegidas devem enviar o cabeçalho no formato definido pelo projeto:

```http
Authorization: JWT <access_token>
```

O access token expira em 15 minutos. O refresh token permanece válido por 7 dias e é rotacionado após o uso, com o token anterior enviado para blacklist.

### Exemplo de uso com cURL

Cadastro:

```bash
curl -X POST http://127.0.0.1:8000/api/v1/auth/users/ \\
  -H "Content-Type: application/json" \\
  -d '{"email":"estudante@example.com","password":"UmaSenhaForte123!","re_password":"UmaSenhaForte123!"}'
```

Login:

```bash
curl -X POST http://127.0.0.1:8000/api/v1/auth/jwt/create/ \\
  -H "Content-Type: application/json" \\
  -d '{"email":"estudante@example.com","password":"UmaSenhaForte123!"}'
```

Consulta do usuário autenticado:

```bash
curl http://127.0.0.1:8000/api/v1/auth/users/me/ \\
  -H "Authorization: JWT SEU_ACCESS_TOKEN"
```

### Configuração para produção

Antes de publicar a API, defina pelo menos `DJANGO_SECRET_KEY`, `DJANGO_DEBUG=0`, `DJANGO_ALLOWED_HOSTS` e `CORS_ALLOWED_ORIGINS`. O valor padrão de `SECRET_KEY` existe apenas para desenvolvimento e não deve ser usado em produção.

### Testes

```bash
cd backend
python manage.py check
python manage.py test
```

A suíte cobre o health check, cadastro, login JWT, acesso ao usuário autenticado, renovação de tokens e bloqueio de rotas protegidas sem autenticação.
