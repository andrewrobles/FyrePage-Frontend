import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";

import styles from "./ProfilePanel.module.css";
import Image from 'next/image';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas, far);

/**
 * Profile Panel
 * 
 * These are the panels that you will use to populate your profile page, you will use these to add things, like application widgets,
 * link buttons, custom widgets, etc.
 */
export default function ProfilePanel(props) {
	const panel = props.panel;

	switch (panel.type) {

		case "button": return (<ProfilePanelButton panel={panel}/>); break;
		case "discord": return (<DiscordPanel id={panel.value}/>); break;
		case "youtubeVideo": return (<YTVideoPanel id={panel.value}/>); break;
		case "spotify": return (<SpotifyTrack data={panel.value}/>); break;

		default: return (<ProfilePanelButton panel={panel}/>); break;

	}
}

/**
 * Panel Icon
 * 
 * This will test to see if it can pull an icon, if it can it will be added to the profile panel, if not,
 * it will simply return null. 
 */
function PanelIcon(props) {
	const icon = props.icon;

	if (!icon) return null;
	if (require('url-regex')().test(icon)) return (<img className={styles.panelButtonImage} src={icon} />);
	if (icon instanceof Array) return (<FontAwesomeIcon className={styles.panelIcon} icon={icon} />)
}

/**
 * Panel Button
 * 
 * This will put a button to redirect to any specific link that you choose.
 */
function ProfilePanelButton(props) {
	const data = props.panel;

	const label = data.label;
	const link = data.link;
	const color = data.color ? data.color : 'white';
	const background = data.bgColor ? data.bgColor : 'black';
	const icon = data.icon;

	const style = {
		color: color,
		backgroundColor: background,
	}

	return (
		<a style={{color: "inherit"}} href={link}>
			<div className={styles.panelButton} style={style}>
				<div className={styles.panelButtonContent}>
					<span className={styles.btnIco}><PanelIcon icon={icon}/></span> 
					<span className={styles.btnText}>{label}</span>
				</div>
			</div>
		</a>
	);
}

/**
 * Discord Panel
 * 
 * This will place a discord widget on your profile whcih will allow you to share your discord easily.
 */
function DiscordPanel(props) {
	const id = props.id
	const link = `https://discord.com/widget?id=${id}&theme=dark`

	return (
		<div>
			<iframe 
				src={link}
				width="375" height="300"
				className={styles.panelDiscordWidget}
				frameBorder="0"
				allowtransparency="true"
				sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
		</div>
	);
}

/**
 * Youtube Video Panel
 * 
 * This will place a youtube embed on your profile which will be able to play or redirect to a youtube video
 * right on your profile
 */
function YTVideoPanel(props) {
	const id = props.id;
	const link = `https://www.youtube.com/embed/${id}`;

	return (
		<div>
			<iframe 
				src={link}
				width="375" height="210"
				className={styles.panelYTVideoWidget}
				frameBorder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen
			/>
		</div>
	)
}

function SpotifyTrack(props) {
	const id = props.data.id;
	const type = props.data.type;
	const link = `https://open.spotify.com/embed/${type}/${id}`

	if (!id) return null;
	if (!type) return null;

	const allowedTypes = ['episode', 'track']
	const height = (type == "episode" ? "152" : "80");

	if (!allowedTypes.includes(type)) return null;

	return (
		<div>
			<iframe 
				src={link}
				className={styles.spotifyTrackWidget}
				width="375" height={height} 
				frameBorder="0" 
				allowtransparency="true" 
				allow="encrypted-media" 
			/>
		</div>
	)
}