FROM node:15

WORKDIR /usr/src/server

COPY package.json ./
COPY package-lock.json ./
RUN npm install -g nodemon
RUN npm install
COPY . ./