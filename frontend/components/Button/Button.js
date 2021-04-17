import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Button.module.css'

export default function Button() {
    return <a 
        className={`btn btn-dark btn-block ${styles.Button}`}
        href={`https://forms.gle/EuaK5kj81ve1AMfD7`}
    >
        Create page or edit existing
    </a>
}