import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Happy days', id: 1 },
        { title: 'Lovely nights', id: 2 },
        { title: 'Rock wind', id: 3 },
    ])

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }

    useEffect(() => {
        console.log("useeff");
    }, [songs])

    return (
        <div className='song-list'>
          
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
    )
}

export default SongList;