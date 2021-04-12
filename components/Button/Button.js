import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Button.module.css'

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button() {
    return <button className={`btn btn-dark btn-block ${styles.Button}`}>
        <FontAwesomeIcon icon={faGoogle} className={`mr-2`} />
        Sign in with Google
    </button>
}