# Frontend stage 1
FROM node:16-alpine3.14 as node
WORKDIR /home/app

COPY . .
RUN \
  yarn install && \
  yarn generate

# Frontend stage 2
FROM nginx:1.21-alpine

COPY --from=node /home/app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3030
