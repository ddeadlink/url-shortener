# Dockerfile
FROM node:lts-bullseye-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY apps/api/package.json ./apps/api/
COPY apps/client/package*.json ./apps/client/

RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Expose port and run
EXPOSE 3000
CMD ["node", "apps/api/dist/main"]