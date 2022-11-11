# syntax=docker/dockerfile:1

FROM node:18.9-alpine

WORKDIR /game-server
COPY ./dist /game-server/dist
COPY package.json /game-server/
RUN yarn start

EXPOSE 4040

