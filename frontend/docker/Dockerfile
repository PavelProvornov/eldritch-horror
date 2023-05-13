# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /frontend

RUN apk add --no-cache make
RUN apk add g++ make py3-pip

CMD [ "make" ]
