# =========================
# Sukslan CMS Worker API
# =========================
FROM node:18-alpine

WORKDIR /app

RUN npm install -g wrangler

COPY . .

ENV NODE_ENV=production

CMD ["wrangler", "dev", "--ip", "0.0.0.0"]
