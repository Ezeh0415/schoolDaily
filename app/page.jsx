import styles from "./styles/landing-page.module.scss"
import Image from "next/image"
import banner from "./assets/images/banner.jpg"
import {BiChart} from "react-icons/bi"
import Link from "next/link"

export default function Home() {
  const oau = [
      {
        id:1,
        num:"01",
        avater:banner,
        name:"daniel olusanya",
        date:"dec 5",
        text:"oau to relase student results before the christmas break"
      },
      {
        id:2,
        num:"02",
        avater:banner,
        name:"daniel olusanya",
        date:"dec 5",
        text:"oau to relase student results before the christmas break"
      },
      {
        id:3,
        num:"03",
        avater:banner,
        name:"daniel olusanya",
        date:"dec 5",
        text:"oau to relase student results before the christmas break"
      },
      {
        id:4,
        num:"04",
        avater:banner,
        name:"daniel olusanya",
        date:"dec 5",
        text:"oau to relase student results before the christmas break"
      },
      {
        id:5,
        num:"05",
        avater:banner,
        name:"daniel olusanya",
        date:"dec 5",
        text:"oau to relase student results before the christmas break"
      },
      {
        id:6,
        num:"06",
        avater:banner,
        name:"daniel olusanya",
        date:"dec 5",
        text:"oau to relase student results before the christmas break"
      },
  ]
  const gpt = [
    {
      id:1,
      img_avater:banner,
      name:"daniel olusanya",
      text:"chatGPT,or: how i learned to stop worring and love ai",
      date:"dec 5",
      mins_read:"3 mins read",
      love_ai:"love ai"
    },
    {
      id:2,
      img_avater:banner,
      name:"daniel olusanya",
      text:"chatGPT,or: how i learned to stop worring and love ai",
      date:"dec 5",
      mins_read:"3 mins read",
      love_ai:"love ai"
    },
    {
      id:3,
      img_avater:banner,
      name:"daniel olusanya",
      text:"chatGPT,or: how i learned to stop worring and love ai",
      date:"dec 5",
      mins_read:"3 mins read",
      love_ai:"love ai"
    },
    {
      id:4,
      img_avater:banner,
      name:"daniel olusanya",
      text:"chatGPT,or: how i learned to stop worring and love ai",
      date:"dec 5",
      mins_read:"3 mins read",
      love_ai:"love ai"
    }
  ]

  return (
      <main className={styles.main}>
         <header>
           <h1>schdaily</h1>
           <nav>
             <ul>
              <li><Link href="#">our story</Link></li>
              <li><Link href="#">university</Link></li>
              <li><Link href="#">updates</Link></li>
              <li><Link href="#">contact us</Link></li>
             </ul>
           </nav>
           <button><a href="/commponets/signup">sign up</a></button>
         </header>
         {/* banner section */}
         <section>
            <div className={styles.banner}>
               <Image 
                  src={banner}
                  placeholder="blur"
                  style={{width:"100%"}}
               />
            </div>
         </section>
         {/* first section */}
         <section>
           <div className={styles.textSection}>
              <p><BiChart /></p>
              <h1> trending on schooldaily</h1>
           </div>
         </section>
         <section>
            <div className={styles.gridFlex}>
              {oau.map((item) => {
                return (
                  <div key={item.id} className={styles.firstSection}>
                      <div>
                        <p className={styles.num}>{item.num}</p>
                        <Image 
                            src={item.avater}
                            alt="pic"
                            placeholder="blur"
                            quality="100"
                            style={{width:"40px",height:"40px",marginLeft:"10px"}}
                        />
                        <p className={styles.name}>{item.name}</p>
                      </div>
                        <h3>{item.text}</h3>
                        <p className={styles.date}>{item.date}</p>
                  </div>
                )
              })}
            </div>
         </section>
         {/* second section */}
         <section>
           <div className={styles.flexDiv}>
              <div>
                  {gpt.map((item) => {
                    return (
                      <div className={styles.first} key={item.id}>
                      <div className={styles.textDiv}>
                        <div className={styles.textFirstDiv}>
                        <Image 
                                src={item.img_avater}
                                alt="pic"
                                placeholder="blur"
                                quality="100"
                                style={{width:"40px",height:"40px",}}
                            />
                            <p>{item.name}</p>
                        </div>
                            <h3>{item.text}</h3>
                        <div className={styles.textSecondDiv}>
                            <p>{item.date}</p>
                            <p>{item.mins_read}</p>
                            <p className={styles.loveAi}>{item.love_ai}</p>
                        </div>
                      </div>
                      <Image 
                                src={banner}
                                alt="pic"
                                placeholder="blur"
                                quality="100"
                                style={{width:"200px",height:"150px",}}
                            />
                  </div>
                    )
                  })}
              </div>
              <div className={styles.secondDiv}>
                  <h2>discover more of what matters to you</h2>
                  <div>
                     <p>ChatGpt</p>
                     <p> programing</p>
                     <p>oau</p>
                     <p>LASU</p>
                     <p>JAMB</p>
                     <p>WAEC</p>
                  </div>
                  <div>
                     <p>ChatGpt</p>
                     <p> programing</p>
                     <p>oau</p>
                     <p>LASU</p>
                     <p>JAMB</p>
                     <p>WAEC</p>
                  </div>
                  <h6><a href="#">see more topics</a></h6>

                  <span>
                    <br />
                    <br />
                    <br />
                    <br />
                    <hr />
                    <main>
                        <p>help</p>
                        <p>terms of service</p>
                        <p>privacy policy</p>
                        <p>caution notice</p>
                        <p>about us</p>
                        <p> contact us</p>
                        <p>text to speech</p>
                    </main>
                  </span>
              </div>
           </div>
         </section>
      </main>
  )
}
