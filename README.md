To install all requirements needed and start the best server in the world (probably), do this commands (and of course make sure that you have python and pip installed)

`pip3 install -r requirements.txt`

`pip3 install django djangorestframework pyyaml`

`python3 manage.py runserver`

After that it might be possible to visit [localhost:8000](url) 

Going straight by [localhost:8000/api/api](url) will lead you to django rest framework api (since i have some problems with postman-echo endpoint such as Acces-Control-Allow-Origin and I can't deal with it by myself :p )

Nevertheless, have fun! (And feel free to ask me whenever you straggle with any troubles)
