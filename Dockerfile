FROM node:20 as build
WORKDIR /app
COPY . .
RUN npm i
CMD ['npm', 'run', 'build:prod']