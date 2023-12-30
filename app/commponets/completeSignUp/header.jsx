import React from 'react'
import style from "../../styles/completeSignUp.module.scss"

export default function header({Progress}) {
  return (
          <header>
                    <h1>schdaily</h1>
                    <section>
                        <p>start</p>
                        <span>
                            <p className={Progress ? style.progress : style.progress1}></p>
                        </span>
                        <p>Finish</p>
                    </section>
         </header>
  )
}
