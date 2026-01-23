'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { getImageUrl, BUCKETS } from '../../supabase/fetchImageUrl';
import './Hero.scss';

export default function Hero() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const url = getImageUrl(BUCKETS.GENERAL_IMAGES, 'print.png');

      // Ensure image actually loads before rendering
      const img = new window.Image();
      img.onload = () => {
        setImageUrl(url);
        setLoaded(true);
      };
      img.onerror = () => {
        console.error('Failed to load print image');
        setLoaded(false);
      };
      img.src = url;
    } catch (err) {
      console.error('Error loading image:', err);
    }
  }, []);

  return (
    <section className="hero">
      <div className="blueBox"
      style={{ '--bg-image': `url(${imageUrl})` }}
      >
        {loaded && (
          <div className="titleWrapper">
            <div className="titleImage">
              <Image
                src={imageUrl}
                alt="Print texture background"
                fill
                sizes="700px"
                priority
              />
            </div>

            <h1 className="titleGrid">
              <span className="grid-a">w w w</span>
              <span className="grid-b">p e c</span>
              <span className="grid-c">k e l</span>
              <span className="grid-d">s e n</span>
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}
