import React from 'react';
import { getAuthSession } from '@/lib/nextauth';
import SignInButton from './SignInButton';
import UserAccountNav from './UserAccountNav';
import IconButton from './IconButton';

type Props = {}

const Navbar = async (props: Props) => {
    const session = await getAuthSession();

    return (
        <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2">
            <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
                {/* Logo */}
                <IconButton text="uizly" color='bg-blue-800'>
                    <img src="/icons/quizly.png" alt="Quizly Logo" className="w-6 h-6" />
                </IconButton>

                <div className="flex items-center">
                    {session?.user ? (
                        <UserAccountNav user={session.user} />
                    ) : (
                        <SignInButton text="Sign In" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
