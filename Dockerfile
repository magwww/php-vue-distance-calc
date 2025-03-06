FROM php:8.2-cli
COPY . .
WORKDIR /usr/src/myapp
CMD ["php", "-S", "0.0.0.0:10000", "-t", "backend"]
