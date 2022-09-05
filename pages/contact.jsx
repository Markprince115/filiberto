import React from 'react'

function Contact() {
  return (
    <div id='contact' className='contact items-center justify-center p-5'>
        <div className='contact-title text-yellow-400 text-center p-5 font-bold text-3xl'>
            <h2> Contact Us </h2>
        </div>

        <p className='px-5'> contact us to place your order. We'll love to hear from you ✋</p>
        <h3 className='p-5 text-3xl'> Email </h3>
        <p className='px-5'>
            info@gmail.com
        </p>
        <h3 className='p-5 text-3xl'> Phone </h3>
        <p className='px-5'>
            +234-9022334455
        </p>
        <h3 className='p-5 text-3xl'> Location </h3>
        <p className='px-5'>
            No 3, Allen street, Opebi , ikeja, Lagos. Nigeria
        </p>
    </div>
  )
}

export default Contact