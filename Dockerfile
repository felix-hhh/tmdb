FROM node:21-alpine

EXPOSE 3000

COPY ./src /app
COPY package.json /app

WORKDIR /app

RUN npm install

ENTRYPOINT ["npm","run","run"]