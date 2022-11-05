# Install dependencies only when needed
FROM node:18-alpine
RUN apk add libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

COPY . .

RUN npm i

EXPOSE 3000

ENV PORT 3000

CMD yarn start