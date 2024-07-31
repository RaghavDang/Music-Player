import { useEffect, useState } from "react";
import { Search } from "../Components/Search"
import { Songs } from "../Components/Songs";
import { getSongs } from "../Services/api-client";
import { Player } from "../Components/Player";

export const SearchPage=()=>{
    const [allSongs,setSongs]=useState([]);
    const [flag,setFlag]=useState(false)
    const [song,setPlayerSong]=useState(null);

    //Component Life Cycle
  
    const loadSongs=async()=>{
        setSongs( await getSongs('Punjabi Songs'));
    }
    useEffect(() => {
        loadSongs();
    },[])

    const togglePlayer=(flag,songarg)=>{
        
        setPlayerSong(songarg);
        setFlag(flag);
    }
    

    const getArtistName=async (artistName)=>{
        console.log('Received Artist Name' , artistName); 
        setSongs( await getSongs(artistName));
    }

    const jsx=<><Search fn={getArtistName}/>
           <br/><br/>
        <Songs fn={togglePlayer} allSongs={allSongs}/></>
  
    return(
    <div className="container">
        <h1 className="alert alert-info text-center">Music Store</h1>
        
        {flag?<Player fn={togglePlayer} song={song}/>:jsx}
        
    </div>
);
}