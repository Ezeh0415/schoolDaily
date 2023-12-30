"use client"
import React, {useState} from 'react'
import styles from "../../styles/signUp.module.scss"
import style from "../../styles/completeSignUp.module.scss"
import Header from "./header"
import Link from 'next/link'

export default function CompleteSignUp() {
    const [progress, setProgress] = useState(true);
    const handlePass = (e) => {
      e.preventDefault();
      setProgress(false)
    }
    
  return (
     <main className={style.main}>
        <article>
                        <Header  Progress={progress}/>
                <section>
                <div className={styles.main} id={progress ? style.signupfirst : style.signupfirst1}>
                    <nav>
                    <h1>almost there!</h1>
                    <p>finish creating your account for full experience</p>
                    <form>
                            <input type="text" placeholder='your full name' />
                            <br />
                            <input type="email" placeholder='your email' />
                            <br />
                            <input type="password" placeholder='Password' />
                            <br />
                            <button onClick={handlePass}>create account</button>
                    </form>
                    </nav>
                </div>
            </section>
            <section>
                <div className={progress ? style.signuplast : style.signuplast1}>
                    <h2>one last step</h2>
                     <h4>follow 3 topics or more</h4>
                    <span>
                        <p>chatgpt</p>
                        <p>LASU</p>
                        <p>chatgpt</p>
                        <p>programing</p>
                        <p>OAU</p>
                        <p>chatgpt</p>
                    </span>
                    <span>
                        <p>LASU</p>
                        <p>programing</p>
                        <p>chatgpt</p>
                        <p>OAU</p>
                        <p>chatgpt</p>
                    </span>
                    <span>
                        <p>chatgpt</p>
                        <p>chatgpt</p>
                        <p>LASU</p>
                        <p>programing</p>
                        <p>chatgpt</p>
                        <p>OAU</p>
                    </span>
                    <span>
                        <p>LASU</p>
                        <p>programing</p>
                        <p>chatgpt</p>
                        <p>OAU</p>
                        <p>chatgpt</p>
                        <p>chatgpt</p>
                    </span>
                    <span>
                        <p>chatgpt</p>
                        <p>chatgpt</p>
                        <p>LASU</p>
                        <p>programing</p>
                        <p>chatgpt</p>
                        <p>OAU</p>
                    </span>
                    <span>
                        <p>LASU</p>
                        <p>programing</p>
                        <p>chatgpt</p>
                        <p>OAU</p>
                    </span>
                    <button><Link href="/commponets/mainPage">continue</Link></button>
                </div>
            </section>
        </article>
     </main>
  )
}
