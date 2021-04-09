import styles from './ProfileBio.module.css'

/**
 * Profile Bio
 * 
 * This will create a simple bio object that will go in between your panels and your profile header.
 */
export default function ProfileBio(props) {
	const bio = props.bio;
	return(<div className={styles.profileBio}>{bio}</div>);
}