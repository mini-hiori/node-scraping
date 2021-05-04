FROM node:16-buster

WORKDIR /app

COPY . .

RUN npm install

CMD [ "node_modules/.bin/ts-node", "main.ts"]