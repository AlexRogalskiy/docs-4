---
title: Installation
description: 'Install and run ViewTube on your own server'
---

The recommended installation method is Docker. Updating will be less of a hassle.

# General

## Youtube Cookies (not required)
Youtube rate-limits IPs pretty quickly. You can provide your own cookies to circumvent this issue.

### Get your Youtube cookie
- navigate to Youtube in a web browser
- Log in, preferrably with an alt account
- open up the dev tools console
- type `document.cookie`
- copy the entire response

### Get your Youtube identifier
You can find this by going to a video's watch page, viewing the source,
and searching for "ID_TOKEN"

# Docker
For self-hosting with docker, the following docker images are required.
1. Server: `mauriceo/viewtube:0.9`  
2. Database: `mongodb:4.4`  
3. Redis: `redis:6`  

The API is accessible from a different path than the client.
For example: [viewtube.io](https://viewtube.io) for the client, [viewtube.io/api](https://api.viewtube.io/api/) for the api.

## Setup
Image: `mauriceo/viewtube:0.9`  
The `latest` tag will always be the latest stable version.
If you want the development version, you can pull the `dev` tag.
Default port: 8066

### Environment variables
ViewTube will check all required environment variables on startup. Check the logs to see if any are missing!

| Variable | Default | Explanation |
| --- | --- | --- |
| VIEWTUBE_URL* | http://localhost:8066/ | The url of your instance. This needs to be the url you're accessing viewtube from, including the scheme (http or https). Example 1: A local ip address and port 8066 would be VIEWTUBE_URL=http://123.23.0.3:8066. Example 2: Behind a reverse proxy using a domain with ssl would be VIEWTUBE_URL=https://viewtube.example.com |
| VIEWTUBE_DATABASE_HOST | localhost | The hostname of the database (in this case: viewtube-mongodb) |
| VIEWTUBE_DATABASE_PORT | 27017 | The port of the database |
| VIEWTUBE_DATABASE_USER | *empty* | The database username |
| VIEWTUBE_DATABASE_PASSWORD | *empty* | The database password |
| VIEWTUBE_REDIS_HOST | localhost | The hostname of the redis instance (in this case: viewtube-redis) |
| VIEWTUBE_REDIS_PORT | 6379 | The port of the redis instance |
| VIEWTUBE_REDIS_PASSWORD | *empty* | The password of the redis instance |
| VIEWTUBE_ALLOWED_DOMAIN | `/^viewtube\.io\|\.viewtube\.io$/` | Domain the API is accessible from (regex supported) |
| VIEWTUBE_DATA_DIRECTORY | /data | The data directory, preferably a docker volume |
| VIEWTUBE_YOUTUBE_COOKIE | *empty* | Your Youtube cookie (see: [Youtube cookies](#youtube-cookies)) |
| VIEWTUBE_YOUTUBE_IDENTIFIER | *empty* | Your Youtube identifier |

*This variable needs to have a value, otherwise ViewTube will not run. 
Any others are not strictly required. However, yours might differ from the defaults.

### Docker-compose example
```yaml
version: "3"

services:
  viewtube:
    container_name: viewtube
    restart: unless-stopped
    image: mauriceo/viewtube:0.9
    depends_on:
      - viewtube-mongodb
      - viewtube-redis
    networks:
      - viewtube
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./data:/data
    environment:
      - VIEWTUBE_URL=https://viewtube.io/
      - VIEWTUBE_DATABASE_HOST=viewtube-mongodb
      - VIEWTUBE_REDIS_HOST=viewtube-redis
      - VIEWTUBE_DATA_DIRECTORY=/data
    ports:
      - 8066:8066

  viewtube-mongodb:
    container_name: viewtube-mongodb
    image: mongo:4.4
    networks:
      - viewtube
    restart: unless-stopped
    volumes:
      - ./data/db:/data/db

  viewtube-redis:
    container_name: viewtube-redis
    image: redis:6
    networks:
      - viewtube
    restart: unless-stopped
    volumes:
      - ./data/redis:/data

networks:
  viewtube:
```