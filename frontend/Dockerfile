# Stage 1: Build the React app
FROM node:16-alpine as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

# Install curl
RUN apk add --no-cache curl

EXPOSE 3000

CMD ["npm", "start"]
