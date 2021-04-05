import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from '../components/profile/profile'

export default function Home() {
  const data = {
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

  return (
    <Profile data={data}/>
  )
}