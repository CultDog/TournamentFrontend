FROM node:20 as build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build:dev

FROM nginx:alpine
COPY default.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]