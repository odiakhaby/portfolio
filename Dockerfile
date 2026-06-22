# ─── Stage 1: Builder ──────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm@10.33.0

COPY package.json .npmrc ./

RUN pnpm install --no-lockfile

COPY . .

RUN pnpm run build

# ─── Stage 2: Production ───────────────────────────────────────────────────────────────
FROM nginx:stable-alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]