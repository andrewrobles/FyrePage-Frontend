import { SessionController } from "../../controllers/SessionController";
import { Fyre } from "../../Fyre";

export interface FyreEvents {
	"ready": (fyre: Fyre) => void;

	"sessionDataUpdated": (session: SessionController) => void;
	
}