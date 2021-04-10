import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";

type PanelAlign = "left" | "center" | "right"
type HeaderType = "default" | "compact"; // The type of header you want
type ProfilePanelType = "button" | "discord" | "youtubeVideo" // The type of profile panel you're trying to create
type ImageResolvable = string; // Image path or Image URL 

interface CompactLinks {
	link: string, // Link to redirect to
	icon: FontawesomeObject // Font awesome Icon
}

interface ProfilePanel {
	type: ProfilePanelType,
	icon?: ImageResolvable | FontawesomeObject, // Panel Icon
	color?: string, // Color of the panel text (default white)
	bgColor?: string, // color of the panel background (default black)
	align?: PanelAlign, // How should the contents of the panel be aligned
	priority?: boolean // Should this panel be pushed to the top of the panels?
	link?: string // The link this panel will lead to (if any)
	label?: string, // The label of the panel
	value?: string // Value option for certain panel types
}

export default interface ProfileData {
	name: string, // Profile name.
	bio?: string | null, // null will return no bio at all.
	backround?: ImageResolvable | null, // null will make the background white
	header: {
		type: HeaderType,
		subtext: string | null, // Small sub text under the profile name - compact only
		image: ImageResolvable, // Profile Image
		links?: CompactLinks[], // An array of compact profile links
	},
	panels: ProfilePanel[] // All of the panels to display on the profile
}