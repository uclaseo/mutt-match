FROM node:latest
WORKDIR /usr/src/mutt-match/app
ADD . /usr/src/mutt-match/app
RUN npm install

EXPOSE 80

CMD ["node", "server/index.js"]