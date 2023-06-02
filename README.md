# Books API

**Run server**
Terminal: 
```
  npm run dev
```


**POST** `/books`

Create book

Body: 
```json
{
    "name": "Harry Potter",
    "author": "Joan Rouling",
    "price": 25.9,
    "count": 10
}
```

Response: 
```json
{
    "message" : "Book added"
}
```

----

**GET** `/books`

All Books

Response: 
```json
{
    "message": "All books",
    "books": [
        {
            "name": "Harry Potter",
            "author": "Joan Rouling",
            "price": 25.9,
            "count": 10
        }
    ]
}
```

**DELETE** `/books/:id`

Response: 

```json
{
	"message": "Book 3 deleted"
}
```
---

**PUT** `/books/:id`

Update book

Body: 
```json
{
    "name": "Harry Potter",
    "author": "Joan Rouling",
    "price": 25.9,
    "count": 10
}
```

Response: 
```json
{
    "message" : "Book 3 updated"
}
```
---
**GET** `/books?count=3`

Get books where count less or equals than `count` query parameter 

Response: 
```json
{
    "message": "All books",
    "books": [
        {
            "name": "Harry Potter",
            "author": "Joan Rouling",
            "price": 25.9,
            "count": 3
        },
        {
            "name": "In Search of Lost Time",
            "author": "Marcel Proust",
            "price": 54,
            "count": 2
        }
    ]
}
```
---

**GET** `/books?name=Harry%20Potter`

Find one book by name

Response: 
```json
{
    "message": "All books",
    "book": {
            "name": "Harry Potter",
            "author": "Joan Rouling",
            "price": 25.9,
            "count": 3
        }
}
```
---
