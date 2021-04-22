import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

export default function Button(props) {
    return <button 
        onClick={props.onClick}
        className={`btn btn-dark btn-block ${styles.Button}`}
        href={`https://forms.gle/EuaK5kj81ve1AMfD7`}
    >
        <FontAwesomeIcon icon={faGoogle} className={`mr-2`} />
        Sign in with Google
    </button>
}