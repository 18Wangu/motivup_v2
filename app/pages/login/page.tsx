// pages/login/page.tsx

import AuthButtons from '@/app/components/AuthButtons'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  return (
    <div className='h-screen flex flex-col justify-center items-center relative'>
        <h1 className="text-2xl mb-10">Connexion à ton profil</h1>
        <AuthButtons buttonText="CONNEXION AVEC GOOGLE" />
        <Image
            src="/motivup_logo.png"
            alt="MotivUp Logo"
            width={250}
            height={250}
        />

        <Link href="/">
            <Image 
                src="https://d35aaqx5ub95lt.cloudfront.net/images/48b38c250a652878bc0c779a07f2ca48.svg" 
                alt="Fermer la page" 
                width={15} 
                height={15}
                className='absolute top-5 right-5' 
            />
        </Link>
    </div>
  )
}
