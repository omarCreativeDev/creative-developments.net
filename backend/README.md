# Backend

1. Install NGINX:

```
sudo apt install nginx
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

5. Ensure send grid variable exists in webserver bashrc / bashprofile:

```
export SENDGRID_API_KEY=xxx
```
