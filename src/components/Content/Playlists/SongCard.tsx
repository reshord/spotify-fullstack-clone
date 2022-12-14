import '../../../styles/Playlists/SongCard.css'
import { ISongInfo } from '../../../types/types';
import {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks/RTKHook';
import { RootState, store } from '../../../rtk/store';
import React, {useEffect} from 'react'
import {MdOutlineFavoriteBorder, MdFavorite} from 'react-icons/md'
import { addSongToFavourites } from '../../../rtk/slices/SpotifyPlaylists';
import { Link } from 'react-router-dom';
import { getCurrentArtistTopTracks, getCurrentSearchArtist, getRelatedArtists } from '../../../rtk/axios';

const SongCard: React.FC<ISongInfo> = ({isFavourite, number, setButtonNumber, buttonNumber, index, author, title, albumName, img, id, songAuthorId}) => {
    
    const [buttonPlay, setButtonPlay] = useState<boolean>()
    // const [currentFavorite, setCurrentFavorite] = useState<boolean>(false)

    const {favourites, playlists} =  useAppSelector<RootState>(store.getState)    
    const dispatch = useAppDispatch()

    let currentFavorite = playlists.favoritesList.length && playlists.favoritesList.filter(el => el.id === id)

    const addToFavourites = () => {
        // setFavourite(true)
        dispatch(addSongToFavourites({
            id, title, author,
            number: 0,
            img: '',
            songNumber: 0,
            albumName: '',
            isFavourite: false,
            songAuthorId: ''
        }))
    }
    

    const getArtist = () => {
        dispatch(getCurrentSearchArtist({id: songAuthorId}))
        dispatch(getCurrentArtistTopTracks(songAuthorId))
        dispatch(getRelatedArtists(songAuthorId))
        // debugger
    }

    const deleteFavourite = () => {
        // setFavourite(false)
        // dispatch(deleteSongFavourites({id, title, author, isFavourite}))
    }

    useEffect(() => {
    //    if(favourites.favouritesList.length && favourites.favouritesList.filter(el => el.id === id)[0].isFavourite) {
    //         setFavourite(true)
    //    }
    console.log(currentFavorite);
    
    },[playlists.favoritesList.length]);

    return ( 
        <div
             className={buttonNumber === index ? 'onFocusCard' : 'songCardBody'} 
             onMouseMove={buttonNumber !== index ? () => setButtonPlay(true) : () => setButtonPlay(false)} 
             onMouseLeave={() => setButtonPlay(false)}
             onClick={() => setButtonNumber && setButtonNumber(number ? number - 1 : number)}
             >

            <div className="songCardInfo" >
                {buttonPlay ||  buttonNumber === index && (
                    <span className='startPlaySong'>
                        <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    </span>
                )}
                {buttonPlay && (
                    <span className='startPlaySong'>
                        <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 uPxdw UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    </span>
                )}
                {!buttonPlay && buttonNumber !== index && (
                    <span className="songNumber">{number}</span>
                )}
                
                <div className='songInfo'>
                    <img className="songImg" src={img}></img>
                    <div className="aboutSong">
                        <div className="songTitle">{title}</div>    
                        <Link onClick={getArtist} to={`/artist/${id}`} className="songAuthor">{author}</Link>    
                    </div>                    
                </div>
                
            </div>
                <span className='songAlbumName'>{albumName}</span>
                <span className='songDateUpdate'>Soon</span>
                <div className='songTimeBlock'>
                    {isFavourite ? (
                        <MdFavorite style={{fontSize: 20, marginRight: 20, fill: 'lightgreen'}} onClick={() => deleteFavourite()}/>
                    ) 
                    : (
                        <MdOutlineFavoriteBorder style={{fontSize: 20, marginRight: 20, fill: 'white'}} onClick={() => addToFavourites()}/>
                    )}
                    <span className='trackTime'>2:20</span>
                    <div className='moreMenu'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className='moreMenuMobile'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </div>
     );
}
 
export default SongCard;