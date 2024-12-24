/*
  Warnings:

  - Added the required column `xp` to the `Challenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Challenge" ADD COLUMN     "xp" INTEGER NOT NULL;
