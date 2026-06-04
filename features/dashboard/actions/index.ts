'use server'

import {currentUser} from '@/features/auth/actions'
import {db} from '@/lib/db'
import { Templates } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const createPlayground = async (data:
     {
        title: string; 
        template:Templates;
        description?: string;
        userId?: string;
    }) => {
        const {template, title, description} = data;
        const user = await currentUser();
        
        try {
            const playground = await db.playground.create({
                data: {
                    title,
                    description,
                    template,
                    userId: user?.id
                }
            })
                return playground;
        } catch (error) {
            console.error('Error creating playground:', error);
            return null;
        }
    }
 
export const getAllPlaygrounds = async () => {
    const user = await currentUser();
    try {
        const playgrounds = await db.playground.findMany({
            where: {
                userId: user?.id
            },
            include: {
                user: true,
                Starmark: {
                    where:{
                        userId: user?.id
                    },
                    select: {
                        isMarked: true
                    }
                }
            }
        })
        return playgrounds;
    }
    catch (error) {
        console.error('Error fetching playgrounds:', error);
        return null;
    }
}

export const deleteProjectById = async (id:string)=>{
    try {
        await db.playground.delete({
            where:{id}
        })
        revalidatePath('/dashboard');
    } catch (error) {
        console.error('Error deleting project:', error);
    }
}

export const editProjectById = async (id:string, data:{title:string, description:string} )=>{
    try {
        await db.playground.update({
            where:{id},
            data:data
        })
        revalidatePath('/dashboard');
    } catch (error) {
        console.error('Error editing playground:', error);
    }
}

export const duplicateProjectById = async (id:string) => {
    try {
        const project = await db.playground.findUnique({
            where: { id }
        });

        if (!project) {
            console.error('Project not found');
            return null;
        }

        const duplicatedProject = await db.playground.create({
            data: {
                title: `${project.title} (Copy)`,
                description: project.description,
                template: project.template,
                userId: project.userId
            }
        });

        revalidatePath('/dashboard');
        return duplicatedProject;
    } catch (error) {
        console.error('Error duplicating project:', error);
        return null;
    }
}
