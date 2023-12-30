import React from 'react';
import styles from "../styles/Ads.module.scss";
import Image from 'next/image';
import banner from "../assets/images/banner.jpg"

export default function Ads() {
  return (
    <main className={styles.main}>
        <span>
        <Image 
          src={banner}
          alt='ads'
          placeholder='blur'
          quality={100}
          style={{
                width:"100%",
                height:"350px",
                marginTop:"10px"
          }}
        />
        </span>
        <span>
        <Image 
          src={banner}
          alt='ads'
          placeholder='blur'
          quality={100}
          style={{
                width:"100%",
                height:"200px",
                marginTop:"35px"
          }}
        />
        </span>
    </main>
  )
}
