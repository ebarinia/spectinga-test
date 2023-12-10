import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const locale1 = await prisma.locale.create({
        data: {name: 'FR', shipping: 800}
    })

    const locale2 = await prisma.locale.create({
        data: {name: 'GB', shipping: 500}
    })

    const locale3 = await prisma.locale.create({
        data: {name: 'DE', shipping: 700}
    })

    const locale5 = await prisma.locale.create({
        data: {name: 'BE', shipping: 3000}
    })

    const locale6 = await prisma.locale.create({
        data: {name: 'DK', shipping: 200}
    })

    const locale7 = await prisma.locale.create({
        data: {name: 'NL', shipping: 200}
    })

    const locale8 = await prisma.locale.create({
        data: {name: 'ES', shipping: 1000}
    })

    const user1 = await prisma.user.create({
        data: {
            firstName: 'Emmanuel',
            lastName: 'Barinia',
            localeId: locale1.id,
            shipping: true
        }
    })

    const tractor1 = await prisma.tractor.create({
        data: {
            name: 'New Holland T7.225',
            price: 95000,
            img: "https://www.swinnertonmachinery.co.uk/wp-content/uploads/2019/02/IMG_5885-scaled.jpeg",
            collection: 'Available',
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

    console.log(user1, tractor1, locale1, locale2, locale3)
}

main().then(async () => await prisma.$disconnect());