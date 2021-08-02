# DividendDB

![dividenddb_logo](https://user-images.githubusercontent.com/40842018/123397214-2169c280-d5dd-11eb-9589-7ad046426c03.png)

The main object of this project is to help you maximize the dividend income with dividend stocks.

Live Demo <https://dividenddb.vercel.app>

API Demo <https://dividenddb.herokuapp.com/>

## Features

✅ A calculator, Display amount of dividend depending on the shares - If you log in, you can keep tracking your own portfolio.

✅ A monthly calendar

✅ Set the goal with the list of screeners

✅ CRUD - Create(Add) stocks? | Read a list of port? | Update the amount of shares you own | Delete the stock from the list

AUTH, CRUD, Search, API fetch

## Tech Stack

**Language:** TypeScript, JavaScript

**Client:** React, Redux, Styled-components

**Server:** Node, MongoDB



## 💁🏻 [Wiki](https://github.com/iDevBrandon/DividendDB/wiki)

🗓 Loadmap

📑 Feature List

🔨 Skill Spec

📱 Prototype



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
| `api_key` | `string` | **Not Required**. Your API key |

### Get item

```http
  GET /api/stocks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Upcoming Features

- Send an email notification whenever corp announces a new dividend with Github Action?
