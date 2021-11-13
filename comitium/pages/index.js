import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import navbarstyles from '../styles/Navbar.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Comitium</title>
        <meta name="description" content="hello" />
        <link rel="icon" href="/icons/logo.png" />
      </Head>
      <body>
        <div className={navbarstyles.navbar}>
          <div className={navbarstyles.logocontainer}>
            <Link href="/">
              <a><Image className={navbarstyles.logo}
                src="/icons/logo.png"
                height={64}
                width={64}
              /></a>
            </Link>
          </div>
   
          <div className={navbarstyles.actions}>
            <Link href="/">
              <a><Image className={navbarstyles.icon}
                  src="/icons/home.svg"
                  height={32}
                  width={32}
              /></a>
            </Link>
            <Image className={navbarstyles.icon}
              src="/icons/upload.svg"
              height={32}
              width={32}
            />
            <Image className={navbarstyles.icon}
              src="/icons/questionmark.svg"
              height={32}
              width={32}
            />
            {/*<Image className={navbarstyles.icon}
              src="/icons/message.svg"
              height={32}
              width={32}
            />*/}
            <div className={navbarstyles.pfpcontainer}>
              <Image className={navbarstyles.pfp}
                src="/icons/examplepfp.jpg"
                height={32}
                width={32}
              />
            </div>

          </div>
        </div>
        <main>
          <div className={styles.content}>
            <div className={styles.post}>
              <div className={styles.postheading}>
                <div className={styles.postpfpcontainer}>
                  <Image className={styles.postpfp}
                    src="/icons/examplepfp.jpg"
                    height={32}
                    width={32}
                  />
                </div>
                <h4 className={styles.postusername}>
                  sigmamale420
                </h4>
              </div>
              <div className = {styles.postcontent}>
                <Image className={styles.postimage}
                  src="/icons/examplepost.jpg"
                  height={500}
                  width={500}
                />
              </div>
              <div className={styles.postfooter}>
                <div className={styles.posticons}>
                  <Image className={styles.posticon}
                      src="/icons/heart.svg"
                      height={24}
                      width={24}
                    />
                  <Image className={styles.posticon}
                    src="/icons/comment.svg"
                    height={24}
                    width={24}
                  />
                  {/*<Image className={styles.posticon}
                    src="/icons/directmessage.svg"
                    height={24}
                    width={24}
                  />*/}
                </div>
                <div className={styles.postinfocontainer}>
                  <p className={styles.poststats}>
                    <strong>23980 likes</strong>
                  </p>
                  <p className={styles.postcaption}>
                    <strong>sigmamale420</strong> why use lorem ipsum when you can just pioasdfhp;ioasd3 14298pyp2h3; ufsdh
                  </p>
                  <p className={styles.postcomment}>
                    699 comments
                  </p>
                  <p className={styles.postdate}>
                    3 DAYS AGO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  )
}
