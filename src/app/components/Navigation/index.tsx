'use client'

import { useState, useEffect } from 'react'

function Header() {
  return (
    <div className="mb-20">
      <h1 className="relative text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl uppercase font-black text-center text-3d">
        <div className="bg-gradient-to-r from-fuchsia-200 via-teal-200 to-yellow-200 text-transparent bg-clip-text bg-300% animate-gradient">
          Top of the Pops
        </div>
      </h1>
      <p className="block mt-6 text-lg text-blue-300 text-center">
        serving bops every week ✌️
      </p>
    </div>
  )
}

function Footer() {
  // we actually want this to re-render!
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const anagrams = [
    'Pop Of The Tops',
    'Opts Of The Pop',
    'Post The Pop Of',
    'Spot Of The Pop',
    'Top Pops The Of',
    'The Spot Of Pop',
    "Pop's Foot The",
    'Stop Of The Pop',
    'Pops Of The Top',
    "Pot's Of The Pop",
    'Pop The Soft Top',
    'Pop To The Soft',
    'Pop Of The Post',
    'The Top Of Pops',
    'Spot The Pop Of',
    "Pop's Top The Of",
    'Of Pop The Stop',
    "Pop's Of The Top",
    'The Spot Pop Of',
    'Stop The Pop Of',
    "Top's Of The Pop",
  ]

  // pick a random anagram
  const [randomAnagram, setRandomAnagram] = useState<string>('')
  const [clickCount, setClickCount] = useState<number>(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const generateRandomAnagram = () => {
    setRandomAnagram(anagrams[Math.floor(Math.random() * anagrams.length)])
  }

  useEffect(() => {
    generateRandomAnagram()
  }, [])

  const handleTextClick = () => {
    generateRandomAnagram()

    if (clickCount === 11) {
      alert(
        "👋 hey there, fellow creative person. the world needs more people like you. the ones who aren't afraid to dream and make new things happen. stay creative, and keep stoking that fire until the day you die. we need you!",
      )
    }

    setClickCount(clickCount + 1)
  }

  return (
    <footer
      role="contentinfo"
      className="mt-24 flex justify-between items-center w-full h-24 border-t text-gray-500">
      <div>
        <p className="text-sm mb-1">
          made by{' '}
          <a
            className="text-indigo-500 hover:text-indigo-300"
            href="https://jpmarqu.es"
            target="_blank">
            jpmarqu.es
          </a>
        </p>
        <p className="text-xs">
          sourced from{' '}
          <a
            className="underline hover:text-indigo-300"
            href="https://rapidapi.com/Glavier/api/genius-song-lyrics1"
            target-="_blank">
            Genius
          </a>
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p
          className="text-sm mb-1 lowercase select-none hover:text-indigo-300 cursor-pointer"
          onClick={() => handleTextClick()}>
          {randomAnagram}
        </p>
        <p className="text-xs">stay creative ✌️</p>
      </div>
    </footer>
  )
}

export { Header, Footer }
