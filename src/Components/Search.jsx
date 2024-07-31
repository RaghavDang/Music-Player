import { useRef } from "react";

export const Search=({fn})=>{
    const artist=useRef();
    return(
    <>
   
    <h4>Artist Name</h4>
    <input ref={artist} type='text' className="form-control" placeholder ='Search Artist Wise Songs'/>
    <br />
    <button className="btn btn-success" onClick={()=>{
       fn(artist.current.value);
    }}>Search It</button>
    </>
);
}