# Backend

1. Install nodejs, npm and pm2:

```
sudo apt install nodejs
sudo apt install npm
npm i -g pm2
```

2. Install NGINX:

```
sudo apt install nginx
```

3. Ensure `creativedevelopments.net.conf` exists on the webserver in:

```
/etc/nginx/conf.d/
```

4. Test the NGINX configuration for errors:

```
sudo nginx -t
```

5. If there are no errors, reload the configuration:

```
sudo nginx -s reload
```

6. Ensure send grid variable exists in webserver bashrc / bashprofile:

```
export SENDGRID_API_KEY=xxx
```
