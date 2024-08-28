/*
  Warnings:

  - Added the required column `attendance` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discord` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logs` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `main` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mic` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `raidtype` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ui` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "attendance" TEXT NOT NULL,
ADD COLUMN     "discord" TEXT NOT NULL,
ADD COLUMN     "logs" TEXT NOT NULL,
ADD COLUMN     "main" TEXT NOT NULL,
ADD COLUMN     "mic" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "raidtype" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "ui" TEXT NOT NULL;
