import Head from 'next/head'
import styles from './profile.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Profile(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>{props.data.name}</title>
        <link rel="icon" href='/profile.png' />
      </Head>

      <Image
        className={styles.image} 
        src='/profile.png'
        height={105}
        width={105}
      />

      <div className={styles.name}>{props.data.name}</div>

      <LinkButtonColumn labels={props.data.labels} links={props.data.links}/>
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