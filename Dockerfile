FROM nginx
COPY build /usr/share/nginx/html
COPY default.conf /etc/nginx/nginx.conf