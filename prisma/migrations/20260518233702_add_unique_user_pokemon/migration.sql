/*
  Warnings:

  - A unique constraint covering the columns `[userId,pokeApiId]` on the table `UserPokemon` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserPokemon_userId_pokeApiId_key" ON "UserPokemon"("userId", "pokeApiId");
