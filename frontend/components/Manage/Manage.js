import styles from './Manage.module.css'

import { useGoogleLogout } from 'react-google-login'

import { useRouter } from 'next/router'

import ProfileHeader from '../ProfileHeader/ProfileHeader'
import data from '../../data/data'


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

    const userData = data['andrewrobles']

    const url = 'http://localhost:8000/v1/profile'

    fetchData(url).then(data=>{

        console.log(data)

        return <button onClick={signOut}>
            <ProfileData data={data}/>
            <div>Sign out</div>
        </button> 
    })

    return <button onClick={signOut}>
        <div>Sign out</div>
    </button> 
}

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const ProfileData = (props) => {
    return <div>
        <p>props.data.googleId</p>
        <p>props.data.idToken</p>
    </div>
}