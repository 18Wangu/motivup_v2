// api/challenges/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]/route';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  // Vérifiez si l'utilisateur est connecté
  if (!session || !session.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Récupérez les données du corps de la requête
  const { name, emoji, frequency } = await req.json();

  // Validation basique des champs
  if (!name || !emoji || !frequency) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    // Récupération de l'ID utilisateur depuis la session
    const userId = session.user.id;

    console.log('userId', userId);
    // Création du défi dans la base de données
    const challenge = await prisma.challenge.create({
      data: {
        name,
        emoji,
        frequency,
        userId, // On utilise l'ID utilisateur récupéré ici
      },
    });

    return NextResponse.json(challenge, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
