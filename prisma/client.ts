import {PrismaClient} from "@prisma/client"

/*
Anytime we define or change a model, then create a migration
Prisma CLI automatically generates or regenerates this Prisma Client
So it's always in sync with our models
 */

const prismaClientSingleton = () => {
    return new PrismaClient()
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
/*
we export this in this module
we can create this prisma module anywhere in our application,
but as a best practice, we have only single instance of this
running our application
This first time this client file is imported somewhere in our application,
we get a new instance of this Prisma Client, but the second time this
file is imported, this code is not re-executed, it's cached,
so the result will be reused.
 */
export default prisma;