'use client';

import Head from 'next/head';
//import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  // Ejemplo de uso de Redux
  // const dispatch = useDispatch();
  // const counter = useSelector((state: any) => state.counter);

 

  return (
    <>
      <Head>
        <title>Cristian Nores. Software Engineer</title>
        <meta name="description" content="My personal page" />
        {/* Meta tags para SEO en redes sociales */}
        <meta property="og:title" content="Cristian Nores. Software Engineer" />
        <meta property="og:description" content="My personal page" />
        <meta property="og:image" content="https://example.com/linkedin-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://example.com/twitter-image.jpg" />
      </Head>
      <main>
        <h1>Cristian Nores. Software Engineer</h1>
        <Navbar></Navbar>
      
      </main>
    </>
  );
}
