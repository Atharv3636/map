
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# 🌍 HeritageProject [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

##📌 Overview

This project is designed to preserve cultural heritage by converting text from images into digital, readable, and translatable content. It uses OCR technology to extract text and makes it accessible through translation and transliteration.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Atharv3636/map.git
```

Go to the project directory

```bash
  cd map
```

Install dependencies 

Front End
```bash
  npm install
```
Backend
```bash
  cd Backend
  npm install
```

Start the server

```bash
  npm start
```
Start the Backend server

```bash
  cd Backend
  npm run dev
```

## Demo

https://map.aryaavart.in/


## Environment Variables

To run this project, you will need to add the following environment variables to your SupabaseClint file

`supabaseUrl = URL `

`supabaseKey =  KEY`


## Tech Stack

**Client:** React, 

**Server:** Node, Express


## Features

- 📷 Upload image containing text (documents, boards, etc.)
- 🔍 OCR-based text extraction
- 🌐 Text translation to multiple languages
- 🔤 Transliteration support (future scope)
- ⚡ Fast and user-friendly interface

## API Reference

#### Get all items

```http
  POST /api/ocr/extract
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

####  Get translation

```http
  POST /api/translate
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Text`      | `string` | **Required**. add your Text |
| `source`    | `string` |**Required**. source to get language |
| `Target`    | `string` |**Required**. Target to get language |

#### Source , Target , Text
these are the Parameterto use text translation



