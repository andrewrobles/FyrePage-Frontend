import Head from 'next/head'
import styles from './profile.module.css'
import ProfileHeader from './ProfileHeader';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Profile(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>{props.data.name}</title>
        <link rel="icon" href={props.data.image} />
      </Head>

      <ProfileHeader
        dat={props.data.header}
        name={props.data.name}
      />

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