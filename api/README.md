
# create api token 
token is used app,
```shell
# execute in django interactive shell.
# python3 manage.py shell
from django.contrib.auth.models import User

User.objects.
user = User.objects.get(pk=1)

from rest_framework.authtoken.models import Token

token = Token.objects.create(user=user)

# show api Auth Token.
print(token.key)
```

WWW-Authenticate: Token
curl -X GET http://127.0.0.1:8000/api/example/ -H 'Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b'
