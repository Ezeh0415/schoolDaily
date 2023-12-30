import React from 'react'
import styles from "../styles/MainHeader.module.scss";
import Image from 'next/image';
import banner from "../assets/images/banner.jpg"
import {FaQrcode,FaBell,FaSearch} from "react-icons/fa"
import {MdMessage} from "react-icons/md"

export default function MainHeader() {
  return (
      <main className={styles.main}>
         <header>
            <h1>schooldaily</h1>
              <span>
                 <i><FaSearch /></i>
                 <input type="text" placeholder='search anything'/>
              </span>
              <nav>
                <ul>
                  <li><i><FaQrcode /></i> get app</li>
                  <li><i><FaBell /></i> notification</li>
                  <li><i><MdMessage /></i> messages</li>
                </ul>
              </nav>
              <Image
                src={banner}
                alt="user-pic"
                placeholder='blur'
                style={{width:"60px",
                        height:"60px",
                        borderRadius:"50%"
                     }}
              />
         </header>
         <hr />
      </main>
  )
}
