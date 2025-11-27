-- DropForeignKey
ALTER TABLE "public"."elements" DROP CONSTRAINT "elements_gameSessionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."elements" DROP CONSTRAINT "elements_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."event" DROP CONSTRAINT "event_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."game_session" DROP CONSTRAINT "game_session_teamId_fkey";

-- DropForeignKey
ALTER TABLE "public"."registration" DROP CONSTRAINT "registration_eventId_fkey";

-- DropForeignKey
ALTER TABLE "public"."registration" DROP CONSTRAINT "registration_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."team" DROP CONSTRAINT "team_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."team_invite" DROP CONSTRAINT "team_invite_teamId_fkey";

-- DropForeignKey
ALTER TABLE "public"."team_member" DROP CONSTRAINT "team_member_teamId_fkey";

-- DropForeignKey
ALTER TABLE "public"."team_member" DROP CONSTRAINT "team_member_userId_fkey";

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registration" ADD CONSTRAINT "registration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registration" ADD CONSTRAINT "registration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_member" ADD CONSTRAINT "team_member_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_member" ADD CONSTRAINT "team_member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_invite" ADD CONSTRAINT "team_invite_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_session" ADD CONSTRAINT "game_session_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elements" ADD CONSTRAINT "elements_gameSessionId_fkey" FOREIGN KEY ("gameSessionId") REFERENCES "game_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elements" ADD CONSTRAINT "elements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
