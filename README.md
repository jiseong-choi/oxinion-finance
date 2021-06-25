# DividendDB

![0cfa28f7818e4cdc899aa77703e15b8c (1)](https://user-images.githubusercontent.com/40842018/123391830-5e32bb00-d5d7-11eb-8318-4cd8c7f89589.png)

The main object of this project is to help you maximize the dividend income with dividend stocks.

Live Demo <https://dividenddb.vercel.app>

API Demo <https://dividenddb.vercel.app/>

## Features

✅ A calculator, Display amount of dividend depending on the shares - If you log in, you can keep tracking your own portfolio.

✅ A monthly calendar

✅ Set the goal with the list of screeners

✅ CRUD - Create(Add) stocks? | Read a list of port? | Update the amount of shares you own | Delete the stock from the list

## Tech Stack

**Language:** TypeScript, JavaScript

**Client:** React, Redux

**Server:** Node, Firebase

## Roadmap

- Additional browser support

- Add more integrations

## 🗂 folder directory structure

```text
.
├── dist
├── public
├── src
    ├── index.tsx
    ├── App.tsx
    ├── store.ts
    ├── components
    │   ├── containers
    │   └── presentational
    ├── routes
    ├── utils
    ├── slices
    ├── constants
    ├── queries
    └── pages


```

## 🚀 Deployment

To deploy this project run

```bash
  npm run deploy
```

## API Reference

It's all avaiable through istock-api that is used json-server.

### Get all items

```http
  GET /api/stocks
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

### Get item

```http
  GET /api/stocks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Upcoming Features

- Send an email notification whenever corp announces a new dividend with Github Action?
