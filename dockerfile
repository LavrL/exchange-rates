FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /usr/share/nginx/html/app
COPY ./dist/exchange-rates /usr/share/nginx/html/app
