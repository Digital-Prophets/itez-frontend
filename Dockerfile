FROM node:17-stretch-slim

WORKDIR /app

COPY . /app


RUN npm config set registry="http://registry.npmjs.org/"  && \
    npm install && \
    npm cache clean --force

ENV PATH ./node_modules/.bin/:$PATH
