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
  /api/get-expense-details/:id

  Response :

```json
{
  "expenseList": "[]"
}
```
