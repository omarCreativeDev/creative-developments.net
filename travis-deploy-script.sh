#!/bin/bash -e
printf 'Deploy stage started...' >&2

# Create zip package
tar -czf tar-package.tgz dist

# Transfer zip package to remote server via scp
sshpass -p "$REMOTE_PASS" scp -o StrictHostKeyChecking=no tar-package.tgz "$REMOTE_USER"@"$REMOTE_IP:$REMOTE_PATH"

# sleep 1 min to ensure scp package transfer completes
sleep 1m

# Connect to remote server via ssh
# sshpass -p "$REMOTE_PASS" ssh "$REMOTE_USER"@"$REMOTE_IP" "cd $REMOTE_PATH; ./deploy.sh"
sshpass -p "$REMOTE_PASS" ssh "$REMOTE_USER"@"$REMOTE_IP" "cd $REMOTE_PATH; rm -rf creative-developments; tar -xzf tar-package.tgz; mv dist/creative-developments creative-developments/; rm -rf dist/; rm tar-package.tgz;"
