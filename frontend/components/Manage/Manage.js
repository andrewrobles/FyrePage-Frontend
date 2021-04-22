import styles from './Manage.module.css'

import { useGoogleLogout } from 'react-google-login'

import { useRouter } from 'next/router'


const clientId = '240083179290-oahd0h3sj4hrd8o0p0i0mf2eqht2re7n.apps.googleusercontent.com'

export default function Manage() {
    const router = useRouter()

    const onLogoutSuccess = (res) => {
       router.push('/')
    };

    const onFailure = () => {
        console.log('Handle failure cases')
    }

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    })

    return <button onClick={signOut}>
        <span>Sign out</span>
    </button> 
}