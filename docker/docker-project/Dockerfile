# Базовый образ — официальный nginx
FROM nginx:alpine

# Удалим дефолтный html, который nginx показывает
RUN rm -rf /usr/share/nginx/html/*

# Копируем твои html/js файлы в нужную директорию
COPY . /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# nginx запускается по умолчанию, можно не писать CMD