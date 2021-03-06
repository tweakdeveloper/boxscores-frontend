FROM node:16-alpine

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn run build

FROM nginx:1-alpine

COPY --from=0 /app/build /usr/share/nginx/html
