#!/bin/bash

git pull origin main
cd ./client && npm install && npm run build
cd ../server && npm install && npm run build && (npm run start:prod &)
sudo systemctl reload nginx.service