## Security Sample Server

### Endpoints

#### Login 

```
https://dago.netlify.com/.netlify/functions/login
```

Res:

```json
{
  "token": "123aisd891u2j3hkjhXXXZZ"
}
```

### Item List

```
https://dago.netlify.com/.netlify/functions/items
```

Res:

```json
{
  "message": "Success",
  "items": [
    {
      "id": 1,
      "name": "HP Jadoel Sekali",
      "harga": 3000,
      "deskripsi": "Ini hape jadoel sekali"
    },
    {
      "id": 2,
      "name": "HP Jadoel Dua kali",
      "harga": 3000,
      "deskripsi": "Ini hape jadoel sekali"
    },
    {
      "id": 3,
      "name": "HP Jadoel Tiga kali",
      "harga": 3000,
      "deskripsi": "Ini hape jadoel sekali"
    },
    {
      "id": 4,
      "name": "HP Jadoel Empat kali",
      "harga": 3000,
      "deskripsi": "Ini hape jadoel sekali"
    },
    {
      "id": 5,
      "name": "HP Jadoel Lima Kali",
      "harga": 3000,
      "deskripsi": "Ini hape jadoel sekali"
    }
  ]
}
```

### Pay 

```
https://dago.netlify.com/.netlify/functions/pay
```

Res:

```json
{
  "message": "success"
}
```


## Author

esafirm

## License 

MIT