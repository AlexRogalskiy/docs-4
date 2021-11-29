---
title: 'Repository structure'
description: 'How the ViewTube repo is setup'
---

## Client

📦  
 ┣ 📂client - _The client, built with [Nuxt.js](https://nuxtjs.org/)_  
 ┃ ┣ 📂assets - _Uncompiled assets like images, stylesheets_  
 ┃ ┣ 📂components - _All the Vue.js components_  
 ┃ ┣ 📂layouts - _Application layouts_  
 ┃ ┣ 📂pages - _The application views and routes_  
 ┃ ┣ 📂plugins - _Javascript plugins to extend vue functionality_  
 ┃ ┣ 📂static - _Static files, directly mapped to the application root_  
 ┃ ┣ 📂store - _Vuex stores_  

Read more about the [Nuxt.js directory structure](https://nuxtjs.org/guides/get-started/directory-structure).

## Server
📦  
 ┣ 📂server - _The API, built with [NestJS](https://docs.nestjs.com/)_  
 ┃ ┣ 📂auth - _Registration, login and related parts_  
 ┃ ┣ 📂common - _Common types, classes, etc._  
 ┃ ┣ 📂core - _The main Youtube API_  
 ┃ ┣ 📂nuxt - _Nuxt instance creation and redirects_  
 ┃ ┣ 📂user - _Notifications, subscriptions and other user related parts_  