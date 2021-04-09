import Head from 'next/head'
import styles from './profile.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Profile(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>{props.data.name}</title>
        <link rel="icon" href={props.data.image} />
      </Head>

      <Image
        className={styles.image} 
        src={props.data.image}
        height={105}
        width={105}
      />

      <div className={styles.name}>{props.data.name}</div>

      <LinkButtonColumn buttons={props.data.buttons} />
    </div>
  )
}

function LinkButtonColumn(props) {
  const buttons = props.buttons

  return (
    <div className={`${ styles.linkButtonColumn }`}>
      {buttons.map(button => <LinkButton label={button['label']} link={button['link']}/>)}
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