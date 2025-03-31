FROM php:8.1-fpm

# Instalar as dependências necessárias
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git libmariadb-dev && \
    apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git libmariadb-dev && \
    apt-get install -y libpq-dev

# Instalar a extensão pdo_mysql
RUN docker-php-ext-install pdo pdo_mysql

# Instalar o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copiar os arquivos da aplicação para o container
WORKDIR /var/www/html
COPY . .

# Instalar as dependências do PHP com o Composer
RUN composer install

# Instalar as dependências do Laravel
RUN php artisan key:generate
RUN php artisan config:cache

# Instalar netcat para o comando de espera
RUN apt-get update && apt-get install -y netcat-openbsd

# Esperar o MySQL ficar pronto antes de rodar as migrações
CMD ["sh", "-c", "while ! mysqladmin ping -h mysql --silent; do sleep 1; done; php artisan migrate && php-fpm"]
