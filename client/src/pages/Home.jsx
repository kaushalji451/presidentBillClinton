import React from 'react';
import { useEffect } from 'react';
import Slide1 from '../components/homeslids/Slide1';
import Slide2 from '../components/homeslids/Slide2';
import Slide3 from '../components/homeslids/Slide3';

export default function Home() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <section>
      {/* Hero Section */}
      <Slide1 />
      {/* Slide 2*/}
      <Slide2 />
      {/* slide 3 */}
      <Slide3 />
    </section>
  );
}

