'use client'

import React, {ButtonHTMLAttributes, FC, useState } from 'react'
import Button from './ui/Button'
import { toast } from 'react-hot-toast'
import { signOut } from 'next-auth/react'
import { Loader2, LogOut } from 'lucide-react'

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton: FC<SignOutButtonProps> = ({...props}) => {
    const [isSigninOut, setIsSigninOut] = useState<boolean>(false)
  return (
    <Button {...props} variant={'ghost'} onClick={async () => {
        setIsSigninOut(true)
        try {
            await signOut()
        } catch (error) {
            toast.error('There was a problem signing out')
        } finally {
            setIsSigninOut(false)
        }
    }}>{isSigninOut?(
        <Loader2 className='animate-spin h-4 w-4' />
    ):(
        <LogOut className='w-4 h-4' />
    )}
    </Button>
  )
}

export default SignOutButton