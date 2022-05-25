import React from 'react'

const SongDetails = ({song, removeSong}) => {
  return (
    <li 
    key={song.id}
    onClick={() => removeSong(song.id)}
    >
        {song.title}
        </li>
  )
}

export default SongDetails