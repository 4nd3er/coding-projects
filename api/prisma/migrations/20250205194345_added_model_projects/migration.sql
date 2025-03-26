-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "GitHubSrc" TEXT NOT NULL,
    "YouTubeSrc" TEXT NOT NULL,
    "WebSrc" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
