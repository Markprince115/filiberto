import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

function Menu() {
  return (
    <>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            <meta name='Description' content='Filibertos special pizza menu'/>
            <meta name='author' content='Filibertos Pizza'/>
            <title> Filiberto's Special Menu </title>
        </Head>

        <div id='menu' className=' text-center p-3 bg-[#f7f5f5]'>
            <div className=' text-3xl pt-5 font-bold items-center text-yellow-400'>
                <h2> Special Arrival </h2>
            </div>

            <div className='w-full px-9 grid grid-col-3 sm:grid-cols-3 gap-5 text-center cursor-pointer py-8'>
                <div className='items-center justify-center w-full shadow-md shadow-[#b1afaf] p-5'>
                    <Image src='/img/hawaii.jpg' width={300} height={250} />
                    <h3 className='text-black text-3xl p-3'> Hawaii </h3>
                    <p> Pineapple, mushrooms, black olives, tomato sauce </p>
                    <h3 className='pt-4 text-amber-800 text-2xl'> $7.50</h3>
                </div>
                <div className='items-center justify-center w-full shadow-md shadow-[#b1afaf] p-5'>
                    <Image src='/img/Pepperoni.png' width={300} height={250} />
                    <h3 className='text-black text-3xl p-3'> Pepproni </h3>
                    <p> Honey butter, pizza dough, tomato sauce, pepperoni, pizza </p>
                    <h3 className='pt-4 text-amber-800 text-2xl'> $9.30</h3>
                </div>
                <div className='items-center justify-center w-full shadow-md shadow-[#b1afaf] p-5'>
                    <Image src='/img/chicken.jpg' width={300} height={250} />
                    <h3 className='text-black text-3xl p-3'> Chicken  </h3>
                    <p> Pineapple, mushrooms, black olives, tomato sauce </p>
                    <h3 className='pt-4 text-amber-800 text-2xl'> $9.10</h3>
                </div>
                <div className='items-center justify-center shadow-md shadow-[#b1afaf] w-full p-5'>
                    <Image src='/img/cheese.png' width={300} height={250} />
                    <h3 className='text-black text-3xl p-3'> cheese </h3>
                    <p> Pineapple, mushrooms, black olives, tomato sauce </p>
                    <h3 className='pt-4 text-amber-800 text-2xl'> $9.90</h3>
                </div>       
                <div className='items-center justify-center shadow-md shadow-[#b1afaf] w-full p-5'>
                    <Image src='/img/Margherita.jpg' width={300} height={250} />
                    <h3 className='text-black text-3xl p-3'> Margherita </h3>
                    <p> Pepperoni, cheese, black olives, tomatoe sause, mushrooms, onion </p>
                    <h3 className='pt-4 text-amber-800 text-2xl'> $5.10</h3>
                </div>       
                <div className='items-center justify-center shadow-md shadow-[#b1afaf] w-full p-5'>
                    <Image src='/img/mexican.jpg' width={300} height={250} />
                    <h3 className='text-black text-3xl p-3'> Mexican </h3>
                    <p> Refried beans, red enchilada sauce, blend cheese, nacho, corn, onion, salsa, chorizo </p>
                    <h3 className='pt-4 text-amber-800 text-2xl'> $7.50</h3>
                </div>       
        </div>        
    </div>
    </>
  )
}

export default Menu