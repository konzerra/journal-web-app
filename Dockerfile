FROM node:16.16.0 as builder
WORKDIR /src
COPY . .
RUN npm install
RUN npm prune --production

EXPOSE 80
CMD ["npm", "start"]
