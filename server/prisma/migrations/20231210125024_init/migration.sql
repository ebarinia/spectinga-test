-- CreateTable
CREATE TABLE "Tractor" (
    "id" SERIAL NOT NULL,
    "collection" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "speed" TEXT NOT NULL,
    "gearbox" TEXT NOT NULL,
    "engine" INTEGER NOT NULL,
    "airBrakes" BOOLEAN NOT NULL DEFAULT false,
    "frontLinkage" BOOLEAN NOT NULL DEFAULT false,
    "frontPTO" BOOLEAN NOT NULL DEFAULT false,
    "cabSuspension" BOOLEAN NOT NULL DEFAULT false,
    "frontSuspension" BOOLEAN NOT NULL DEFAULT false,
    "rearRemoteType" TEXT NOT NULL,
    "numOfRearRemote" INTEGER NOT NULL,
    "frontTyreSize" TEXT NOT NULL,
    "rearTyreSize" TEXT NOT NULL,
    "midAmountValves" BOOLEAN NOT NULL DEFAULT false,
    "gps" TEXT NOT NULL,
    "pumpSize" TEXT NOT NULL,
    "frontLoader" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tractor_pkey" PRIMARY KEY ("id")
);
