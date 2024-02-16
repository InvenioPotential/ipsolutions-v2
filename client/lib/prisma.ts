import { PrismaClient } from '@prisma/client';

declare global {
<<<<<<< HEAD
    var prisma : PrismaClient | undefined;
=======
    var prisma: PrismaClient | undefined;
>>>>>>> origin/addNonReccur_BE
}

export const prisma = globalThis.prisma || new PrismaClient();

<<<<<<< HEAD
if ( process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
=======
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
>>>>>>> origin/addNonReccur_BE
