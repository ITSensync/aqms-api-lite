FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production && npm cache clean --force

COPY . .

EXPOSE 3001
EXPOSE 8080

CMD ["npm", "start"]
