# Pokedex API (Backend)

Backend da Pokedex construído com NestJS, Prisma e PostgreSQL.

## Requisitos

- Node.js 20+
- npm 10+
- Docker (opcional, para o banco de dados)

## Começando

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure o banco de dados:
   - Inicie o Postgres via Docker: `docker-compose up -d`
   - Copie `.env.example` para `.env` e ajuste a `DATABASE_URL`.
   - Rode as migrations: `npm run prisma:migrate:dev` (ou equivalente)

3. Inicie o servidor:
   ```bash
   npm run start:dev
   ```

## Endpoints

- `POST /auth/register`
- `POST /auth/login`
- `GET /pokemon`
- `GET /collection`
... (ver controllers para mais detalhes)

