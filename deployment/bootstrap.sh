apt-get update

echo "Installing nginx and php..."

apt-get install -y php7.0-fpm
apt-get install -y php7.0-xml
apt-get install -y nginx

echo "Copying configuration..."

cp /var/www/vagrant/deployment/nginx/nginx.conf /etc/nginx/sites-available/
cp /var/www/vagrant/deployment/nginx/default /etc/nginx/sites-available/

echo "Restarting services..."

service nginx reload
