import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  const labels = [
    'TikTok', 
    'Instagram', 
    'YouTube', 
    'LinkedIn', 
    'Github'
  ]

  const links = [
    'https://www.tiktok.com/@andrew.robles',
    'https://www.instagram.com/andrewroblesdev/',
    'https://www.youtube.com/channel/UCqNGTj5w7NxE74m25So27gg',
    'https://www.linkedin.com/in/andrew-robles-dev/',
    'https://github.com/andrewrobles'
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Andrew Robles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src='/profile.png'
        height={100}
        width={100}
      />

      <p>Andrew Robles</p>

      <p>Hello, world! I'm a web developer and content creator from California 🌴</p>

      <LinkButtonColumn labels={labels}/>
    </div>
  )
}

function LinkButtonColumn(props) {
  return (
    <span>
      {props.labels.map(element => <LinkButton label={element}/>)}
    </span>
  )
}

function LinkButton(props) {
  return (
    <span>
      {props.label}
      <br/>
    </span>
  )
}
