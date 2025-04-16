FROM node:22

WORKDIR /app

COPY package.json . 

ARG NODE_ENV

RUN if ["$NODE_ENV" = "PRODUCTION"];\
    then npm install --only=production;\
    else npm install;\
    fi
#RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm","start" ]