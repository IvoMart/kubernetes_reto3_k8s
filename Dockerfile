FROM node:24.2.0-alpine

WORKDIR /app
COPY app/ .

RUN npm install

CMD ["npm", "start"]