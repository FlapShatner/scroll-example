'use client'

import { Inter } from 'next/font/google'
import {BsArrowDown} from 'react-icons/bs'
import { Fade } from 'react-awesome-reveal'
import Scroll from './scroll/scroll'
import s from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={s.main}>
      <div className={inter.className}>
        <div className={s.hero}>
        <h1>This is a test</h1>
        <h3>Scroll Down <BsArrowDown/> </h3>
        </div>
        <Scroll />
      </div>
    </main>
  )
}
