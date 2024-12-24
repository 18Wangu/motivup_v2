// app/api/defis/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const defis = await prisma.challenge.findMany();
    return NextResponse.json(defis);
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de la récupération des défis' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  
  try {
    await prisma.challenge.delete({
      where: { id: id },
    });
    return NextResponse.json({ message: 'Défi supprimé avec succès' });
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de la suppression du défi' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
