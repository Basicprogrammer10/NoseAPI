FROM node:14

WORKDIR /usr/src/NoseAPI

COPY package.json ./
RUN npm install

COPY src/ .
COPY dogs/ ./../dogs

CMD [ "node", "index.js" ]