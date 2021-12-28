FROM node:16-alpine

ENV APP_DIR /app

RUN mkdir -p $APP_DIR

WORKDIR $APP_DIR

ENV GAGIEL_HOST 0.0.0.0
ENV GAGIEL_PORT 3000

COPY . $APP_DIR
RUN yarn install
RUN yarn build

RUN yarn cache clean

EXPOSE 3000
CMD [ "sh", "-c", "yarn run db-migrate; yarn start"]
