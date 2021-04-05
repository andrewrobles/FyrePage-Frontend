import { useRouter } from 'next/router'

const Profile = () => {
    const router = useRouter()
    const { user } = router.query

    return <p>{ user }</p>
}

export default Profile