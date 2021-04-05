import { useRouter } from 'next/router'
import Profile from '../components/profile/profile'

const User = () => {
    const andrewrobles = {
        'name': 'Andrew Robles',
        'image': '/andrewrobles.png',
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
    
    const erinsantamaria = {
        'name': 'Erin Santamaria',
        'image': '/erinsantamaria.jpeg',
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
        'andrewrobles': andrewrobles,
        'erinsantamaria': erinsantamaria
    }

    const router = useRouter()
    const { user } = router.query

    if (user in userData) {
        return <Profile data={userData[user]}/>
    } else {
        return <p>User not found</p>
    }
}


export default User 