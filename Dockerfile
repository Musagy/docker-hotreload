FROM node:16

RUN npm i -g nodemon
RUN mkdir -p /home/app/docker-reload

WORKDIR /home/app/docker-reload

EXPOSE ${PORT}

CMD [ "npm", "run", "dev" ]