# 📈 OXINION Finance

<img width="417" alt="Screen Shot 2021-09-20 at 12 19 12 PM" src="https://user-images.githubusercontent.com/40842018/133954051-5d15091f-4d92-438b-810b-b09a1685164d.png">

## Problem
Asset allocation for everyone


## 🎯 Financial Data

- A financial tool to analyze and visualize stock data.

- Provide a simple, fast, and flexible way to store and query dividend dataset with API.

If a company announces for suspension of dividend, will be removed from the database.

Live Demo <https://finance.oxinion.com>

API Demo <https://data.finance.oxinion.com>

## 💁🏻 [Wiki](https://github.com/iDevBrandon/UpDividend/wiki)

🗓 Loadmap
📑 Feature List
🔨 [Skill Spec](https://github.com/iDevBrandon/UpDividend/wiki/Tech-Stack)
📱 Prototype

## 📝 [technical requirements]

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

add your own MongoDB credentials
heroku git:remote -a oxinionfinance

git subtree push --prefix oxinionfinance heroku main

## API specification(OXINION Finance API)

It's all avaiable through OXINION Finance API

### Get all items

```http
  GET https://api.updividend.com/stocks/
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `api_key` | `string` | **Not Required**. Your API key |

### Get item

```http
  GET /api/stocks/${symbol}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## All

![oDividend](https://user-images.githubusercontent.com/40842018/129330000-b346770c-4567-4f46-9a61-87217d97c022.png)

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

## Things to update

- add "createdAt, updatedAt" fields in MongoDB
- run API dynamically with filter stuff
- Track tracsactions. Whenever the target price hits, get a notification even if i sell the stock
- Send an email notification whenever corp announces a new dividend with Github Action?
- StockAI, i refer 4-5 websites to trade. Give strong buy, buy, hold, sell and Strong sell indicator like Fear & Greed index
- In the future, user earn point on oxinion.com and use that point to buy fractional\* shares like decimal investment. i do earn cash from nbt & invest in HK app

## refered API link

[Barchart](https://www.barchart.com/ondemand/api/getDividendData)
[alphavantage](https://www.alphavantage.co/documentation/)
[openbrewerydb](https://www.openbrewerydb.org/documentation/01-listbreweries)
[polygon](https://polygon.io/docs/get_v3_reference_tickers_anchor)

- <https://www.youtube.com/watch?v=1WNO9S214iw>
- <https://github.com/TungTungCoding/daily-dividend-yield-report>
- <https://zuminternet.github.io/zum-front-investing-clone/?fbclid=IwAR2cUrGVZNjqnFBzZXn7bTFu7PecsC3ucG4h7lPVFrLLCCeZ0MH68xMT_wk>

## How to reach me

- Instagram: <https://instagram.com/iDevBrandon>

## About Money - How OXINION Finance would monetize

1. Content management
2. Financial Data through API
3. Ad revenue
4. Subscription pro model tools

## SUPPORT

PayPal – paypal.me/idevbrandon
