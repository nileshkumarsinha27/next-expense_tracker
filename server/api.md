# users

- API to sign up a user into the system

POST
/api/users/signup

Request Body:

```json
{
  "emailId": "abc@xyz.com",
  "password": "abcd",
  "name": "abcd"
}
```

- API for login

POST
/api/users/login

Request Body:

```json
{
  "emailId": "abc@xyz.com",
  "password": "abcd"
}
```

- Get expense details
  GET
  /api/users/get-expense-details/:id

  Response :

```json
{
  "expenseList": "[]"
}
```

- Update expense details
  PUT
  /api/users/add-expense

  Request Body:

  ```json
  {
    "id": "",
    "expense": {
      "name": "",
      "value": ""
    }
  }
  ```
