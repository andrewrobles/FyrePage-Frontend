import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './profile.module.css'
import Image from 'next/image'

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
export default function ProfileHeader(data) {
	const dat = data.dat;
  
	const name = data.name;
	const type = dat.type;
	const image = dat.image;
	const links = dat.links;
  
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
  
			<div className={styles.verticalDiv}></div>
  
			<div className={styles.compactContainer}>
			  <div className={styles.compactName}>{name}</div>
			  <CompactLinks links={links} />
			</div>
		  </div>
		)
	  break;
  
	}
}

/**
 * Compact Links Compiler
 */
function CompactLinks(links) {
	return (links.map(btn => <CompactLink link={btn.link} icon={btn.icon} />));
}

/**
 * Compact Link Element
 * 
 * The compact link element will allow you to create small links in the compact profile header that will use font awesome icons
 * and a link that will go to the desired destination.
 */
function CompactLink(props) {
	const link = props.length ? props.length : "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
	const icon = props.icon ? props.icon : ["fa", "fa-laugh-wink"];

	return (
		<a className={styles.compactLink} href={link}><FontAwesomeIcon icon={icon} /></a>
	)
}