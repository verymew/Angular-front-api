FROM node:22 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm install @angular/cli -g

FROM nginx:alpine
COPY --from=builder /app