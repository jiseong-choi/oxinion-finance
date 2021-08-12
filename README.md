# DividendDB

![dividenddb_logo](https://user-images.githubusercontent.com/40842018/123397214-2169c280-d5dd-11eb-9589-7ad046426c03.png)

The main object of this project is to help you maximize the dividend income with dividend stocks.

If a company announces for suspension of dividend, will be removed from the database.

Live Demo <https://dividenddb.vercel.app>

API Demo <https://dividenddb.herokuapp.com/>

## Features

✅ A calculator, Display amount of dividend depending on the shares - If you log in, you can keep tracking your own portfolio.

✅ A monthly calendar

✅ Set the goal with the list of screeners

✅ CRUD - Create(Add) stocks? | Read a list of port? | Update the amount of shares you own | Delete the stock from the list

✅ RestAPI for a dataset of open dividend stocks database

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

- Track tracsactions. Whenever the target price hits, get a notification even if i sell the stock
- Send an email notification whenever corp announces a new dividend with Github Action?

## Reference

<https://www.openbrewerydb.org/documentation/01-listbreweries>


# DividendDB API

Stock-dividend-api

![dividenddb_logo](https://user-images.githubusercontent.com/40842018/123397214-2169c280-d5dd-11eb-9589-7ad046426c03.png)

US dividend stock API as i could not find out any afforable API for stock dividend history. So please get involved and do PR to make a better open source API for everyone.
I never understood API business means before. To extends this API, i can seperate each functions as a module.

fetch("https://dividenddb.herokuapp.com/stocks")
  .then((res) => res.json())
  .then((data) => console.log(data));

## How to run your API

First, create .env file and put your mongoDB connection url

GET ALL STOCKS DIVIDEND INFO
<https://dividenddb.herokuapp.com/stocks>

/stocks?ticker/{symbol} ?

FILTER STOCKS BY TICKER
<https://dividenddb.herokuapp.com/stocks?ticker=msft>

PAGINATION & LIMIT
<https://dividenddb.herokuapp.com/stocks?_page=1&_limit=2>

SORTING
<https://dividenddb.herokuapp.com/stocks?_sort=id&_order=asc>

## refered API link

[Barchart](https://www.barchart.com/ondemand/api/getDividendData)
[polygon](https://polygon.io/docs/get_v3_reference_tickers_anchor)
[alphavantage](https://www.alphavantage.co/documentation/)

- <https://www.youtube.com/watch?v=1WNO9S214iw>
- <https://github.com/TungTungCoding/daily-dividend-yield-report>

If you would like to connect with me, please hit the below link

## How REST API is made

1. HTTP Method

- GET : Search Data
  - POST : Add a new data
  - PUT : Edit the whole data
  - Patch: Edit a specific data
  - Delete : Delete the data

Data collection

- crawling

Data processing

- email API

Automation

- CI/CD Github Action

How to design API
<https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design>

![ezgif com-gif-maker](https://user-images.githubusercontent.com/40842018/122681329-a7c58380-d22e-11eb-8bed-8852b617dd36.gif)

- Instagram: <https://instagram.com/iDevBrandon>

## Things to update

add "createdAt, updatedAt" fields in MongoDB
run API dynamically with filter stuff
