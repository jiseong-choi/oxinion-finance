# Dividend Kings

The main object of this project is to help you maximize the dividend income with dividend stocks.

Live Demo <https://diviendking.netlify.app>

## Features

✅ Display amount of dividend depending on the shares - If you log in, you can keep tracking your own portfolio.

✅ A dividend Calendar

✅ Set the goal

## Tech Stack

**Language:** TypeScript, JavaScript

**Client:** React, Redux

**Server:** Node, Firebase

## Roadmap

- Additional browser support

- Add more integrations

## 🗂 Web front structure 
```text
.
├── dist
├── public
├── src
│    ├── index.html
│    ├── index.tsx
│    ├── App.tsx
│    ├── store.ts
│    ├── components
│    │   ├── containers
│    │   └── presentational
│    ├── routes
│    ├── utils
│    ├── slices
│    ├── constants
│    ├── queries
│    └── pages
│

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
