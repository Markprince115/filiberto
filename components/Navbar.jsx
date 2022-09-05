import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import {FaPizzaSlice, FaTimes} from 'react-icons/fa'
import Image from 'next/image'
import Head from 'next/head'

function Navbar() {
    const [nav, setNav] = useState(false)

    const [color, setColor] = useState('#000')
    const [textColor, setTextColor] = useState('white')
    
        const handleNav = () => {
            setNav(!nav)
        };
    
    useEffect(() => {
        const changeColor = ()=>{
            if(window.scrollY >= 60){
                setColor('#000')
                setTextColor('#000')
            } else{
                setColor('#000')
                setTextColor('#ffffff')
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);
  return (
    <>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            <meta name='Description' content='Filibertos special pizza menu'/>
            <meta name='author' content='Filibertos Pizza'/>
            <title> Filiberto's Special Menu </title>
        </Head>

<div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto justify-between p-4 flex text-white'>
            <Link href='/'><h1 style={{color: `${textColor}`}} className=' cursor-pointer font-bold text-2xl pb-5 text-yellow-400'><Image src="/img/logo.jpg" width={100} height={50} /><span className=' text-yellow-400'>Filiberto</span></h1></Link>
            <ul className=' hidden sm:flex' style={{color: `${textColor}`}}>
                <li className='p-4 text-yellow-400'>
                    <Link to='/' smooth={true} className='cursor-pointer'> Home</Link>
                </li>
                <li className='p-4 text-yellow-400'>
                    <Link to='about' smooth={true} className='cursor-pointer'> About</Link>
                </li>
                <li className='p-4 text-yellow-400'>
                    <Link to='menu' smooth={true} className='cursor-pointer'> Menu</Link>
                </li>
                <li className='p-4 text-yellow-400'>
                    <Link to='contact' smooth={true} className='cursor-pointer'> Contact</Link>
                </li>
            </ul>


            {/*Mobile button */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? <FaTimes size={40} className='cursor-pointer text-white animate-bounce duration-300' /> : <FaPizzaSlice size={60} className='cursor-pointer text-white pt-4 animate-bounce' />}
            </div>
            {/*mobile menu */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black opacity-80 text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black opacity-90 text-center ease-in duration-300'}>
            <ul>
                <li className='p-4 text-4xl text-yellow-400'>
                    <Link to='/' smooth={true} offset={200}> Home</Link>
                </li>
                <li className='p-4 text-4xl text-yellow-400'>
                    <Link to='about' smooth={true} offset={200}> About</Link>
                </li>
                <li className='p-4 text-4xl text-yellow-400'>
                    <Link to='menu' smooth={true} offset={200}> Menu</Link>
                </li>
                <li className='p-4 text-4xl text-yellow-400'>
                    <Link to='contact' smooth={true} offset={200}> Contact</Link>
                </li>
            </ul> 
            </div>

        </div>

    </div>
    </>
  )
}

export default Navbar