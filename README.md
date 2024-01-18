# SIMPLE CRUD API DENGAN DJANGO REST FRAMEWORK
## PS: INGET GAES INI CUMAN CONTOH YA SELEBIHNYA KALIAN RUBAH SENDIRI ^_^ Happy Code

## Requirements
- Python 3.6
- Django 3.1
- Django REST Framework

## Installation
Setelah kalian mengkloning repositori dengan perintah
```
git clone https://github.com/Framework-Programming/service_mui.git
``` 
selanjutnya kalian harus membuat branch kalian sendiri sebagai workspace project nantinya agar tidak conflict dengan kelompok lainnya dengan perintah
```
git checkout -b namabranchkalian main
git push -u origin namabranchkalian
```
kalian selanjutnya harus membuat virtual env.
kalian dapat melakukan ini dengan menjalankan perintah
```
python -m venv env
```

Setelah ini, virtual env perlu diaktifkan, kalian dapat memperoleh informasi lebih lanjut tentang ini [di sini](https://docs.python.org/3/tutorial/venv.html)

kalian dapat menginstall semua dependency yang diperlukan dengan menjalankan
```
pip install -r requirements.txt
```

## Structure Example
Ini hanya contoh saja rek ya :) kalian bisa otak atik contoh ini untuk membuat API yang dibutuhin di project MUI

Endpoint |HTTP Method | CRUD Method | Result
-- | -- |-- |--
`movies` | GET | READ | Get all movies
`movies/:id` | GET | READ | Get a single movie
`movies`| POST | CREATE | Create a new movie
`movies/:id` | PUT | UPDATE | Update a movie
`movies/:id` | DELETE | DELETE | Delete a movie

## Use
Kita bisa menguji API menggunakan [curl](https://curl.haxx.se/) atau [httpie](https://github.com/jakubroztocil/httpie#installation), atau kita bisa menggunakan [Postman](https://www.postman.com/)

Httpie adalah klien http ramah pengguna yang ditulis dengan Python.

kalian bisa menginstall httpie dengan pip:
```
pip install httpie
```

Pertama, kita harus masuk Django's development server.
```
python manage.py runserver
```
Hanya pengguna yang diautentikasi yang dapat menggunakan layanan API, oleh karena itu jika kita mencobanya:
```
http  http://127.0.0.1:8000/api/v1/movies/
```
kita akan mendapat:
```
{
    "detail": "Authentication credentials were not provided."
}
```
Sebaliknya, jika kita mencoba mengakses dengan credential:
```
http http://127.0.0.1:8000/api/v1/movies/3 "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2MjA4Mjk1LCJqdGkiOiI4NGNhZmMzMmFiZDA0MDQ2YjZhMzFhZjJjMmRiNjUyYyIsInVzZXJfaWQiOjJ9.NJrs-sXnghAwcMsIWyCvE2RuGcQ3Hiu5p3vBmLkHSvM"
```
kita mendapat movie dengan id = 3
```
{  "title":  "Avengers",  "genre":  "Superheroes",  "year":  2012,  "creator":  "admin"  }
```

## Create users and Tokens

Pertama kita perlu membuat pengguna, agar kita bisa login
```
http POST http://127.0.0.1:8000/api/v1/auth/register/ email="email@email.com" username="USERNAME" password1="PASSWORD" password2="PASSWORD"
```

Setelah kita membuat akun, kita dapat menggunakan credential tersebut untuk mendapatkan token

Untuk mendapatkan token kita perlu meminta:
```
http http://127.0.0.1:8000/api/v1/auth/token/ username="username" password="password"
```
setelah itu, kita akan mendapat tokennya
```
{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYxNjI5MjMyMSwianRpIjoiNGNkODA3YTlkMmMxNDA2NWFhMzNhYzMxOTgyMzhkZTgiLCJ1c2VyX2lkIjozfQ.hP1wPOPvaPo2DYTC9M1AuOSogdRL_mGP30CHsbpf4zA",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2MjA2MjIxLCJqdGkiOiJjNTNlNThmYjE4N2Q0YWY2YTE5MGNiMzhlNjU5ZmI0NSIsInVzZXJfaWQiOjN9.Csz-SgXoItUbT3RgB3zXhjA2DAv77hpYjqlgEMNAHps"
}
```
Kita  mendapat dua token, token akses akan digunakan untuk mengautentikasi semua permintaan yang perlu kita buat, token akses ini akan kedaluwarsa setelah beberapa waktu.
Kita dapat menggunakan refresh token untuk meminta access token.

meminta access token yang baru
```
http http://127.0.0.1:8000/api/v1/auth/token/refresh/ refresh="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYxNjI5MjMyMSwianRpIjoiNGNkODA3YTlkMmMxNDA2NWFhMzNhYzMxOTgyMzhkZTgiLCJ1c2VyX2lkIjozfQ.hP1wPOPvaPo2DYTC9M1AuOSogdRL_mGP30CHsbpf4zA"
```
dan kita akan mendapat access token yang baru
```
{
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2MjA4Mjk1LCJqdGkiOiI4NGNhZmMzMmFiZDA0MDQ2YjZhMzFhZjJjMmRiNjUyYyIsInVzZXJfaWQiOjJ9.NJrs-sXnghAwcMsIWyCvE2RuGcQ3Hiu5p3vBmLkHSvM"
}
```

### Commands
```
Get all movies
http http://127.0.0.1:8000/api/v1/movies/ "Authorization: Bearer {YOUR_TOKEN}" 
Get a single movie
http GET http://127.0.0.1:8000/api/v1/movies/{movie_id}/ "Authorization: Bearer {YOUR_TOKEN}" 
Create a new movie
http POST http://127.0.0.1:8000/api/v1/movies/ "Authorization: Bearer {YOUR_TOKEN}" title="Ant Man and The Wasp" genre="Action" year=2018 
Full update a movie
http PUT http://127.0.0.1:8000/api/v1/movies/{movie_id}/ "Authorization: Bearer {YOUR_TOKEN}" title="AntMan and The Wasp" genre="Action" year=2018
Partial update a movie
http PATCH http://127.0.0.1:8000/api/v1/movies/{movie_id}/ "Authorization: Bearer {YOUR_TOKEN}" title="AntMan and The Wasp" 
Delete a movie
http DELETE http://127.0.0.1:8000/api/v1/movies/{movie_id}/ "Authorization: Bearer {YOUR_TOKEN}"
```

### Pagination
API sudah dilengkapi dengan penomoran halaman ini bisa kalian pake untuk berita MUI, secara default respon memiliki page_size=10 tetapi jika kalian ingin mengubahnya, kalian dapat merubah params page_size={nomor_halaman_yang_kalian_mau}
```
http http://127.0.0.1:8000/api/v1/movies/?page=1 "Authorization: Bearer {YOUR_TOKEN}"
http http://127.0.0.1:8000/api/v1/movies/?page=3 "Authorization: Bearer {YOUR_TOKEN}"
http http://127.0.0.1:8000/api/v1/movies/?page=3&page_size=15 "Authorization: Bearer {YOUR_TOKEN}"
```

### Filters
API sudah ada pemfilteran bisa kalian gunakan untuk pencarian berita atau fatwa, kalian dapat memfilter berdasarkan atribut film seperti ini
```
http http://127.0.0.1:8000/api/v1/movies/?title="AntMan" "Authorization: Bearer {YOUR_TOKEN}"
http http://127.0.0.1:8000/api/v1/movies/?year=2020 "Authorization: Bearer {YOUR_TOKEN}"
http http://127.0.0.1:8000/api/v1/movies/?year__gt=2019&year__lt=2022 "Authorization: Bearer {YOUR_TOKEN}"
http http://127.0.0.1:8000/api/v1/movies/?genre="Action" "Authorization: Bearer {YOUR_TOKEN}"
http http://127.0.0.1:8000/api/v1/movies/?creator__username="myUsername" "Authorization: Bearer {YOUR_TOKEN}"
```

kalian juga dapat menggabungkan beberapa filter seperti ini
```
http http://127.0.0.1:8000/api/v1/movies/?title="AntMan"&year=2020 "Authorization: Bearer {YOUR_TOKEN}"
http http://127.0.0.1:8000/api/v1/movies/?year__gt=2019&year__lt=2022&genre="Action" "Authorization: Bearer {YOUR_TOKEN}"
```

#SEMANGATT GAESS ^_^

