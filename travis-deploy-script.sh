#!/bin/bash -e
echo "Deploy stage started..."; \

# Create zip package
echo "Create zip package..."; \
tar -czf tar-package.tgz dist

# Transfer zip package to remote server via scp
echo "Transfer zip package to remote server via scp..."; \
sshpass -p "$REMOTE_PASS" scp -o StrictHostKeyChecking=no tar-package.tgz "$REMOTE_USER"@"$REMOTE_IP:$REMOTE_PATH"

# Sleep 1 min to ensure scp package transfer completes
echo "Sleep 1 min to ensure scp package transfer completes..."; \
sleep 1m

# Connect to remote server via ssh, then...
# 1. remove existing folder
# 2. unpackage
# 3. mv folder
# 4. cleanup

sshpass -p "$REMOTE_PASS" ssh "$REMOTE_USER"@"$REMOTE_IP" "\
cd $REMOTE_PATH; \
rm -rf creative-developments; \
tar -xzf tar-package.tgz; \
mv dist/creative-developments creative-developments/; \
cd creative-developments/backend; \

# kill node to bypass `EADDRINUSE, Address/port already in use` error
killall -9 node

echo "Installing backend dependencies..."
npm i; \

echo "Start node server... then cleanup"
npm run start &; \
cd ../..; \
rm -rf dist/; \
rm tar-package.tgz; \

echo "Exit"; \
exit 0

# Alternatively connect to remote server via ssh, then run deploy script on hosting server
# sshpass -p "$REMOTE_PASS" ssh "$REMOTE_USER"@"$REMOTE_IP" "cd $REMOTE_PATH; ./deploy.sh"
