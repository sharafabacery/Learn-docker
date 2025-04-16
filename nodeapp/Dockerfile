FROM node:22 as base

FROM base as development
WORKDIR /app
COPY package.json . 
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm","start" ]

FROM base as production
WORKDIR /app
COPY package.json . 
RUN npm install 
COPY . .
EXPOSE 4000
CMD [ "npm","start" ]
