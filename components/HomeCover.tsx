import Image from 'next/image';
import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import Reel from './Reel';

export default function HomeCover() {
  return (
    <div className="home-cover">
      <AnimatedTitle text="Creative" />
      <AnimatedTitle text="Developer" />

    </div>
  );
}
