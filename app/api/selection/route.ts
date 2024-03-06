import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import {NextResponse} from "next/server";


export async function GET(req: Request, res: NextResponse) {
    try {

        const groupSelection = await prisma.customization.findMany({
            where: {
                variables:'HQ'
            },
            select:{
                options: true
            }
        });

        const selection = await prisma.customization.findMany(
            {
                where: {
                    NOT: {
                        variables: {
                            in: ['Site', 'Types', 'SiteSelection' , 'HQ']
                        }
                    }
                },
                select: {
                    id: true,
                    department: true,
                    variables: true,
                    options: true
                }
            }
            );
            const typeSelection = await prisma.customization.findMany({
                where: {
                    variables: 'Types'
                },
                select: {
                    department: true,
                    options: true
                }
            });

            const siteSelection = await prisma.customization.findMany({
                where: {
                    variables: 'Site'
                },
                select: {
                    options: true
                }
            });

            

            return new Response(JSON.stringify({ groupSelection,selection, typeSelection, siteSelection }), { status: 200 });
        } catch (error) {
        // Handle error
        console.error('Error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}