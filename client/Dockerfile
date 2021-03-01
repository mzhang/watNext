FROM node:15

WORKDIR /usr/src/client

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./