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

      <ProfileHeader
        dat={props.data.header}
        name={props.data.name}
      />

      <LinkButtonColumn buttons={props.data.buttons} />
    </div>
  )
}

/**
 * Profile Header Element
 * 
 * This is the profile Header element.  This will create the profile header with the profile picture, username, etc.
 * There will be multiple types of profile headers.  The profile header types are as defined:
 * 
 * * default - The default layout of the profile with the Picture above above the username.
 * * compact - If you have a lot of links and you dont want to create a great long list of then, you can use this
 *             profile header to include more profile links as small icons.  This will also compress your profile
 *             picture to a smaller 
 */
function ProfileHeader(data) {
  const dat = data.dat;

  const name = data.name;
  const type = dat.type;
  const image = dat.image;

  switch (type) {

    case 'default':
      return (
        <div className={styles.defaultProfileHeader}>
          <Image 
            className={styles.image} 
            src={image}
            height={105}
            width={105}
          />
  
          <div className={styles.name}>{name}</div>
        </div>
      )
    break;

    case 'compact':
      return (
        <div className={styles.compactProfileHeader}>
          <Image 
            className={styles.image} 
            src={image}
            height={75}
            width={75}
          />

          <div className={styles.compactContainer}>
            <div className={styles.compactName}>{name}</div>
          </div>
        </div>
      )
    break;

  }
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