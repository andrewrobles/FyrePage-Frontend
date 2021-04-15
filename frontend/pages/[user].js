import { useRouter } from 'next/router'
import Profile from '../components/Profile/Profile'
import data from '../data/data'

const User = () => {
    const router = useRouter()
    const { user } = router.query

    if (user in data) {
        return <Profile data={data[user]}/>
    } else {
        return <p>User not found</p>
    }
}

export default User 