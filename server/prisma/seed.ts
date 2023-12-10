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

    console.log(user1)
}

main().then(async () => await prisma.$disconnect());