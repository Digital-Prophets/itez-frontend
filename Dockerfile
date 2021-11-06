FROM node:17-stretch-slim

WORKDIR /app

COPY . /app

RUN npm install && npm cache clean --force

ENV PATH ./node_modules/.bin/:$PATH
