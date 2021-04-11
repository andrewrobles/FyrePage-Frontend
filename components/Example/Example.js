import styles from './Example.module.css'
import Image from 'next/image'

export default function Example() {
    return <span>
    <Image 
        className={styles.Example}
        src={'/example.png'}
        height={430}
        width={221}
    />
    </span>
}