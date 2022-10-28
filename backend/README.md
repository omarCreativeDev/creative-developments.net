# Backend

1. Install nodejs, NGINX, npm and pm2 on webserver:

```
sudo apt install nodejs
sudo apt install npm
sudo apt install nginx
npm i -g pm2
```

2. Ensure `creativedevelopments.net.conf` exists on the webserver in:

```
/etc/nginx/conf.d/
```

3. Test the NGINX configuration for errors:

```
sudo nginx -t
```

4. If there are no errors, reload the configuration:

```
sudo nginx -s reload
```

5. Ensure required variables exists on webserver bashrc / bashprofile:

```
export SENDGRID_API_KEY=xxx
export MONGODB_PASSWORD=xxx
```

6. Backend node app is managed via pm2. List all running node applications:

```
pm2 list
```

7. Managing apps is straightforward:

```
pm2 stop     <app_name|namespace|id|'all'|json_conf>
pm2 restart  <app_name|namespace|id|'all'|json_conf>
pm2 delete   <app_name|namespace|id|'all'|json_conf>
```

8. To have more details on a specific application:

```
pm2 describe <id|app_name>
```

9. To monitor logs, custom metrics, application information:

```
pm2 monit
```

## Troubleshooting

If the backend is not running, ssh to webserver `ssh creativedevelopments.net`and navigate to the backend directory:

```
`/var/www/creative-developments/backend`
```

and run:

```
pm2 start server.js
```
