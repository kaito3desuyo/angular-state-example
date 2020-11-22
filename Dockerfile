FROM node:lts

RUN npm i -g @angular/cli

RUN mkdir -p /home/node/angular-state-example && chown -R node:node /home/node/angular-state-example

USER node

WORKDIR /home/node/angular-state-example

COPY package*.json ./

RUN npm i

COPY --chown=node:node . .