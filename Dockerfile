FROM node:10-alpine as node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build -- --prod

FROM nginx
RUN rm /usr/share/nginx/html/index.html
COPY --from=node /app/dist/clarity-seed/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
