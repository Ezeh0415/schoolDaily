import React from 'react'
import styles from "../../styles/mainPage.module.scss";
import MainHeader from '../MainHeader';
import SideBar from "../SideBar";
import Ads from '../Ads';
import Image from 'next/image';
import banner from "../../assets/images/banner.jpg";
import Link from 'next/link';
import {FaRegHeart} from "react-icons/fa";
import {MdOutlineComment} from "react-icons/md";
import {RiShareLine} from "react-icons/ri";
import {HiDotsHorizontal} from "react-icons/hi"

export default function mainPage() {
  return (
    <main className={styles.main}>
        <MainHeader />
        <section>
          <span>
             <SideBar />
          </span>
            <div className={styles.firstDiv}> 
                <header>
                   <div>
                     <span>
                     <Image 
                          src={banner}
                          alt='user img'
                          placeholder='blur'
                          quality={100}
                          style={{
                            width:"40px",
                            height:"40px",
                            borderRadius:"50%"
                          }}
                      />
                      <p>d/username</p>
                     </span>
                      <small>7 mins ago</small>
                      <small>lagos</small>
                   </div>
                   <Link href="#">connect</Link>
                </header>
                <article>
                      <h2>JAMB result is out</h2>
                      <Image 
                        src={banner}
                        alt='img post'
                        placeholder='blur'
                        quality={100}
                        style={{
                          width:"100%",
                          height:"300px",
                          borderRadius:"10px",
                          marginTop:"-8px"
                        }}
                      />
                      <span>
                          <ul>
                            <li>
                              <i><FaRegHeart /></i>
                                <em>30k</em>
                            </li>
                            <li>
                              <i><MdOutlineComment /></i>
                                <em>30k</em>
                            </li>
                            <li>
                              <i><RiShareLine /></i>
                                <em>30k</em>
                            </li>
                          </ul>
                          <i><HiDotsHorizontal /></i>
                      </span>
                </article>
                {/* second section */}
                <header>
                   <div>
                     <span>
                     <Image 
                          src={banner}
                          alt='user img'
                          placeholder='blur'
                          quality={100}
                          style={{
                            width:"40px",
                            height:"40px",
                            borderRadius:"50%"
                          }}
                      />
                      <p>d/username</p>
                     </span>
                      <small>2 mins ago</small>
                      <small>onitsha</small>
                   </div>
                </header>
                <article>
                      <h2>what do you know about OAU?</h2>
                        <p>how dose that work? like lets asume your in the us do you have to get aproval from the FAA or can you just do what you want? seems like sea planes should be way more popular than they are given thant they turn besically any water into an airport that has to be so convenient in remote place like alaska and its not like yot cant make a sea plane that can also land on regular runways</p>

                        <Link href="#"> view full post</Link>

                        <span>
                          <ul>
                            <li>
                              <i><FaRegHeart /></i>
                                <em>30k</em>
                            </li>
                            <li>
                              <i><MdOutlineComment /></i>
                                <em>30k</em>
                            </li>
                            <li>
                              <i><RiShareLine /></i>
                                <em>30k</em>
                            </li>
                          </ul>
                          <i><HiDotsHorizontal /></i>
                      </span>
                </article>
            </div>
            <span>
               <Ads />
            </span>
        </section>
    </main>
  )
}
