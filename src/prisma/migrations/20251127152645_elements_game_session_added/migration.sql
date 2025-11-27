-- CreateTable
CREATE TABLE "game_session" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "elements" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "gameSessionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "elements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "elements_userId_idx" ON "elements"("userId");

-- CreateIndex
CREATE INDEX "elements_gameSessionId_idx" ON "elements"("gameSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "elements_userId_gameSessionId_name_key" ON "elements"("userId", "gameSessionId", "name");

-- AddForeignKey
ALTER TABLE "game_session" ADD CONSTRAINT "game_session_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elements" ADD CONSTRAINT "elements_gameSessionId_fkey" FOREIGN KEY ("gameSessionId") REFERENCES "game_session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elements" ADD CONSTRAINT "elements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
