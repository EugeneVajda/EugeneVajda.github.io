# # этап сборки (build stage)
FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# этап production (production-stage)
EXPOSE 8080
CMD [ "http-server", "dist" ]