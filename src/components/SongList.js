import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import NewSongForm from './NewSongForm';
import SongDetails from './SongDetails';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Happy days', id: 1 },
        { title: 'Lovely nights', id: 2 },
        { title: 'Rock wind', id: 3 },
    ])

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }])
    }
    const removeSong = (id) => {
        setSongs(songs.filter(song => song.id != id))
    }

    useEffect(() => {
        console.log("useeff");
    }, [songs])

    return (
        <div className='song-list'>

            <ul>
                {songs.map(song => <SongDetails key={song.id} song={song} removeSong={removeSong}/>)}
            </ul>
            <NewSongForm addSong={addSong} />
        </div>
    )
}

export default SongList;