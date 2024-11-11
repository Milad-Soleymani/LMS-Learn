import { GraduationCap } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


const AuthPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='flex items-center px-4 border-b lg:px-6 h-14 '>
                <Link to={'/'} className='flex items-center justify-center' />
                <GraduationCap className='w-8 h-8 mr-4'/>
                <span className='text-xl font-extrabold'> LMS LEARN </span>
            </header>
        </div>
    )
}

export default AuthPage
