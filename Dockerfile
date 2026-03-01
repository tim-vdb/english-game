FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci --ignore-scripts

COPY . .
RUN npx prisma generate --schema=src/prisma/schema.prisma
RUN NEXT_PUBLIC_API_URL=http://localhost npm run build

FROM node:20-alpine
WORKDIR /app

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/src/prisma ./src/prisma
COPY --from=build /app/src/generated ./src/generated
COPY --from=build /app/node_modules/prisma ./node_modules/prisma
COPY --from=build /app/node_modules/@prisma ./node_modules/@prisma

RUN npm install -g prisma@6
ENV HOSTNAME=0.0.0.0
EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy --schema=src/prisma/schema.prisma && node server.js"]
