import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Récupérer tous les défis
export async function GET() {
  try {
    const defis = await prisma.challenge.findMany();
    return NextResponse.json(defis);
  } catch (error) {
    return NextResponse.json(
      { message: 'Erreur lors de la récupération des défis' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Récupérer l'XP total de tous les défis d'un utilisateur
export async function POST(req: Request) {
  const { userId } = await req.json(); // On suppose que l'utilisateur passe son ID

  try {
    // Récupérer les défis associés à cet utilisateur, avec leur XP
    const userChallenges = await prisma.challenge.findMany({
      where: {
        userId, // Filtrer par userId
      },
    });

    // Additionner l'XP de tous les défis
    const totalXp = userChallenges.reduce((total, challenge) => {
      return total + challenge.xp; // Accumule l'XP de chaque défi
    }, 0);

    return NextResponse.json({ totalXp });
  } catch (error) {
    return NextResponse.json(
      { message: 'Erreur lors de la récupération de l\'XP' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Mettre à jour un défi (ex : l'XP)
export async function PATCH(req: Request) {
  const { id, xp } = await req.json();

  try {
    const updatedChallenge = await prisma.challenge.update({
      where: { id },
      data: { xp },
    });
    return NextResponse.json(updatedChallenge);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de l\'XP' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Supprimer un défi
export async function DELETE(req: Request) {
  const { id } = await req.json();

  try {
    await prisma.challenge.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Défi supprimé avec succès' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Erreur lors de la suppression du défi' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
