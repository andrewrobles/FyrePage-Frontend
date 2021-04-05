import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  const data = {
    'name': 'Andrew Robles',
    'image': '/profile.png',
    'links': [
      'https://www.tiktok.com/@andrew.robles',
      'https://www.instagram.com/andrewroblesdev/',
      'https://www.youtube.com/channel/UCqNGTj5w7NxE74m25So27gg',
      'https://www.linkedin.com/in/andrew-robles-dev/',
      'https://github.com/andrewrobles'
    ],
    'labels': [
      'TikTok',
      'Instagram',
      'YouTube',
      'LinkedIn',
      'Github'
    ]
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{data.name}</title>
        <link rel="icon" href={data.image} />
      </Head>

      <Image
        className={styles.image} 
        src={data.image}
        height={105}
        width={105}
      />

      <div className={styles.name}>{data.name}</div>

      <LinkButtonColumn labels={data.labels} links={data.links}/>
    </div>
  )
}

function LinkButtonColumn(props) {
  const pairs = zip(props.labels, props.links)

  return (
    <div className={`${ styles.linkButtonColumn }`}>
      {pairs.map(element => <LinkButton label={element[0]} link={element[1]}/>)}
    </div>
  )
}

function zip(a, b) {

  const mapFunction = (element, index) => {
    return [element, b[index]];
  }

  return a.map(mapFunction);
}

function LinkButton(props) {
  return (
    <div>
      <a className={`btn btn-primary mb-2 btn-lg ${ styles.linkButton }`} href={props.link}>{props.label}</a>
      <br/>
    </div>
  )
}
