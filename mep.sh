#!/bin/bash

git pull origin main
cd ./server && npm install
cd ../client && npm install
npm run build