import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user1 = await prisma.user.create({
        data: {
            firstName: 'Emmanuel',
            lastName: 'Barinia',
            locale: 'FR',
            shipping: true
        }
    })

    const tractor1 = await prisma.tractor.create({
        data: {
            name: 'New Holland T7.225',
            img: "https://www.swinnertonmachinery.co.uk/wp-content/uploads/2019/02/IMG_5885-scaled.jpeg",
            collection: 'available',
            year: 2022,
            location: 'UK',
            speed: '50 kph',
            gearbox: 'Autocommand',
            engine: 1330,
            airBrakes: true,
            frontLinkage: true,
            frontPTO: true,
            cabSuspension: true,
            frontSuspension: true,
            rearRemoteType: 'Electric',
            numOfRearRemote: 4,
            frontTyreSize: '540/65 R28',
            rearTyreSize: '650/65 R38',
            midAmountValves: true,
            gps: 'Full GPS',
            pumpSize: '160L/min',
            frontLoader: false,
        }
    })

    console.log(user1, tractor1)
}

main().then(async () => await prisma.$disconnect());