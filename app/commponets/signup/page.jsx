"use client"
import React from 'react'
import styles from "../../styles/signUp.module.scss"
import {GiCancel} from "react-icons/gi"
import {FcGoogle} from "react-icons/fc"
import {FaFacebook} from "react-icons/fa"
import Link from 'next/link'

export default function SignUp() {

    const handleForm = (e) => {
       e.preventDefault()
    }
    

  return (
    <main className={styles.main}>
       <div className={styles.mainDiv}>
           <p className={styles.icon}><Link href="/"><GiCancel/></Link></p>
            <div>
                <h2>join schooldaily</h2>
                <span className={styles.firstSpan}>
                    <i><FcGoogle /></i>
                    <p>sign up with google</p>
                </span>
                <span className={styles.firstSpan}>
                    <i><FaFacebook /></i>
                    <p>sign up with facebook</p>
                </span>
                <span className={styles.lastSpan}>
                    <hr />
                     <p>or</p>
                    <hr />
                </span>
                <form>
                   <input type="email" placeholder='your email' />
                   <p>
                    already have an account? <Link href="/commponets/login">sign in</Link>
                   </p>

                   <button onClick={handleForm}><Link href="/commponets/completeSignUp">continue</Link></button>
                   <h5>click sign up to agree to schooldaily,s <Link href="#">terms of service</Link> and acknowledge that schooldaily,s <Link href="#">privacy policy </Link> applies to you</h5>
                </form>
            </div>
         </div>
    </main>
  )
}
