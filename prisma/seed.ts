import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs';

const prisma = new PrismaClient()
async function main() {
  const email = 'jaroslavfilo95@gmail.com'
  const password = await hash('1234567890', 10);
  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password
    },
  })
  console.log({ user })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })