# Dividend Kings

> > > > > > > Stashed changes

Build your wealth with a dividend growth tool.

Live Demo <https://diviendking.netlify.app>

## Features

✅ Display amount of dividend depending on the shares

✅ A dividend Calendar

✅ Set the goal

## Tech Stack

**Language:** TypeScript, JavaScript

**Client:** React, Redux

**Server:** Node, Firebase

## Roadmap

- Additional browser support

- Add more integrations

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
