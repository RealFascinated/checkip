# Install dependencies only when needed
FROM node:18-alpine
RUN apk add libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN npm i

EXPOSE 3000

ENV PORT 3000

CMD yarn start