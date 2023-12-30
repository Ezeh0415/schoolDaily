"use client"
import React from 'react'
import styles from "../styles/sidebar.module.scss"
import Link from 'next/link';
import {FaHome} from "react-icons/fa"
import {IoIosArrowForward} from "react-icons/io"
import {AiFillThunderbolt} from "react-icons/ai"


export default function SideBar() {

  return (
     <main className={styles.main}>
        <section className={styles.firstTwo}>
                <ul>
                      <li>
                        <i><FaHome /></i>
                        <Link href="/commponets/mainPage">Home</Link>
                      </li>
                      <li>
                        <i><AiFillThunderbolt /></i>
                        <Link href="#">Latest</Link>
                      </li>
                </ul>
        </section>
          <section className={styles.secondThree}>
                <div>
                  <ul>
                    <li>
                        <i><AiFillThunderbolt /></i>
                        <a href="#">mentions</a>
                    </li>
                    <li>
                        <i><AiFillThunderbolt /></i>
                        <a href="#">space</a>
                    </li>
                    <li>
                        <i><AiFillThunderbolt /></i>
                        <a href="#">topics</a>
                    </li>
                  </ul>
                      <span>
                          <i><IoIosArrowForward /></i>
                          <i><IoIosArrowForward /></i>
                          <i><IoIosArrowForward /></i>
                      </span>
                </div>
          </section>
          <section className={styles.thirdFour}>
                <div>
                  <ul>
                    <li>
                        <i><AiFillThunderbolt /></i>
                        <a href="#">JAMB</a>
                    </li>
                    <li>
                        <i><AiFillThunderbolt /></i>
                        <a href="#">Oau Space</a>
                    </li>
                    <li>
                        <i><AiFillThunderbolt /></i>
                        <a href="#">General</a>
                    </li>
                    <li>
                        <i><AiFillThunderbolt /></i>
                        <a href="#">Lagos conn..</a>
                    </li>
                  </ul>
                      <span>
                          <i><IoIosArrowForward /></i>
                          <i><IoIosArrowForward /></i>
                          <i><IoIosArrowForward /></i>
                          <i><IoIosArrowForward /></i>
                      </span>
                </div>
          </section>
          <section className={styles.footer}>
            <div>
              <ul>
                  <li><Link href="#">text to speech</Link></li>
                  <li><Link href="#">help</Link></li>
                  <li><Link href="#">about us</Link></li>
                  <li><Link href="#">contact us</Link></li>
                </ul>
                 <h2>schooldaily 2024</h2>
            </div>
          </section>
     </main>
  )
}
