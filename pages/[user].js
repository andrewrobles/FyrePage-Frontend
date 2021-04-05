import { useRouter } from 'next/router'
import Profile from '../components/profile/profile'

const User = () => {
    const andrewrobles = {
        'name': 'Andrew Robles',
        'image': '/profile.png',
        'links': [
          'https://www.tiktok.com/@andrew.robles',
          'https://www.instagram.com/andrewroblesdev/',
          'https://www.youtube.com/channel/UCqNGTj5w7NxE74m25So27gg',
          'https://www.linkedin.com/in/andrew-robles-dev/',
          'https://github.com/andrewrobles'
        ],
        'labels': [
          'TikTok',
          'Instagram',
          'YouTube',
          'LinkedIn',
          'Github'
        ]
    }

    const userData = {
        'andrewrobles': andrewrobles
    }

    const router = useRouter()
    const { user } = router.query

    return <Profile data={userData['andrewrobles']}/>

}


export default User 