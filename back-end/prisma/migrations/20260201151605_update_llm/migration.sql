/*
  Warnings:

  - You are about to drop the column `actionType` on the `UserRequest` table. All the data in the column will be lost.
  - You are about to drop the column `llmResponse` on the `UserRequest` table. All the data in the column will be lost.
  - You are about to drop the column `requestText` on the `UserRequest` table. All the data in the column will be lost.
  - Added the required column `data` to the `UserRequest` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "data" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" TEXT
);
INSERT INTO "new_UserRequest" ("createdAt", "id", "metadata") SELECT "createdAt", "id", "metadata" FROM "UserRequest";
DROP TABLE "UserRequest";
ALTER TABLE "new_UserRequest" RENAME TO "UserRequest";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
