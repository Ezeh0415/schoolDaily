import React from 'react'
import styles from "../../styles/signUp.module.scss"
import style from "../../styles/login.module.scss"
import {GiCancel} from "react-icons/gi"
import {FcGoogle} from "react-icons/fc"
import {FaFacebook} from "react-icons/fa"
import Link from 'next/link'

export default function SignUp() {


    

  return (
    <main className={styles.main}>
       <div className={styles.mainDiv}>
           <p className={style.icon}><Link href="/"><GiCancel/></Link></p>
            <div>
                <h2>welcome back</h2>
                <span className={style.firstSpan}>
                    <i><FcGoogle /></i>
                    <p>sign in with google</p>
                </span>
                <span className={style.firstSpan}>
                    <i><FaFacebook /></i>
                    <p>sign in with facebook</p>
                </span>
                <span className={styles.lastSpan}>
                    <hr />
                     <p>or</p>
                    <hr />
                </span>
                <form>
                   <input type="text" placeholder='your full name' />
                    <br />
                    <br />
                   <input type="password" placeholder='password' />
                   <p><a href="#">forgot password</a></p>
                 
                   <button><Link href="#">LOG in</Link></button>
                   <h5>no account? <a href="/commponets/signup">sign up</a></h5>
                </form>
            </div>
         </div>
    </main>
  )
}
