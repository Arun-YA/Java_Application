FROM node:14.11.0-alpine
COPY . /app
WORKDIR /app
RUN npm install 
CMD npm run build --output-hashing all && concurrently "npm run build --watch" "serve dist/testingapp"
EXPOSE 5000
