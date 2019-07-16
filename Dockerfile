FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install --quiet


COPY . .

EXPOSE 9000
CMD grunt serve