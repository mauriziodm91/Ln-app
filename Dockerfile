FROM node:lts-alpine

ENV VITE_API_URL https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

USER node

CMD [ "npm", "start" ]

EXPOSE 5173