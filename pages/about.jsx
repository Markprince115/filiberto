import React from 'react'
import Head from 'next/head'

function About() {
  return (
    <>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            <meta name='Description' content='About Filibertos'/>
            <meta name='author' content='Filibertos Pizza'/>
            <title> Filiberto's Special Menu </title>
        </Head>

        <div id='about' className='py-5' >
            <div className='title text-yellow-400 text-3xl text-center p-5 m-5'>
                <h2> About Filiberto </h2>
            </div>
            <p className='px-5'>
            Filiberto's Pizzza (region)
            filiberto's Pizza served over 500 million pizzas last year worldwide. Our delivery people drive more than 10 million miles every week to bring you the best pizza we can make. We operate over 11,000 pizza places in more than 80 countries dedicated to providing great tasting pizza for carryout or delivered to your door. How did we become such a powerhouse of pizza delivery? Let's look.
            </p>

            <h2 className=' p-5 text-3xl'> Pizza</h2>
            <p className='px-5'>Pizza is an amazingly popular food around the world consisting typically of a flattened bread dough spread with a savory mix of ingredients including tomato sauce and cheese, along with other toppings. Pizza is a very festive dish that is best shared amongst loved ones. It is perfect for every occasions, be in the business lunch delivery, the kids birthday celebration in the restaurant or the perfect date night spot. Domino's Pizza is the leading pizza restaurant in Nigeria providing exceptional Pizza delivery and dine in service.</p>
        </div>
    </>
  )
}

export default About