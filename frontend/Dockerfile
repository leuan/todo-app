FROM oven/bun

WORKDIR /app

COPY package*.json bun.lockb ./
RUN bun install
RUN bun prepare
COPY . ./

CMD [ "bun", "dev" ]