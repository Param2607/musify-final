import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {

  const [songs]=useState([

   
    {
      title: "Deewani Mastani",
      artist: "Shreya Ghoshal ",
      img_src: "./images/mastani.jpg",
      src: "./music/Deewani Mastani.mp3"
    },
    {
      title: "Pinga",
      artist: "Shreya Ghoshal ",
      img_src: "./images/pinga.webp",
      src: "./music/03 Pinga (Bajirao Mastani) Shreya Ghoshal 190Kbps.mp3"
    },
    {
      title: "Ek Dil Ek Jan",
      artist: "Shivam Pathak ",
      img_src: "./images/ekdil.jpg",
      src: "./music/02 Ek Dil Ek Jaan - Padmavati 190Kbps.mp3"
    },
    {
      title: "Nagada Sang Dhol",
      artist: "Shreya Ghoshal ",
      img_src: "./images/nagada.webp",
      src: "./music/07 Nagada Sang Dol.mp3"
    },
    {
      title: " SHUBHAARAMBH ",
      artist: "Shruti Pathak ",
      img_src: "./images/kai-po.jpg",
      src: "./music/Shubhaarambh.mpeg"
    },
    {
      title: " Mast Magan ",
      artist: "Arijit Singh ",
      img_src: "./images/mast-magan.webp",
      src: "./music/Mast magan.mpeg"
    },
    {
      title: " Ambarsariya ",
      artist: "Spna Mohapatra",
      img_src: "./images/ambar.jpg",
      src: "./music/Ambarsariya- Fukrey.mpeg"
    },
    {
      title: "  Zingaat",
      artist: "Ajay Gogavale & Atul Gogavale ",
      img_src: "./images/sairat.jpeg",
      src: "./music/jingat.mpeg"
    },
    {
      title: "Levitating ",
      artist: "Dua Lipa ",
      img_src: "./images/leviating.jpg",
      src: "./music/Levitating.mpeg"
    },
    {
      title: "Positions",
      artist: "Ariana Grande ",
      img_src: "./images/positions.png",
      src: "./music/positions-ari.mpeg"
    },
    {
      title: "Shape Of You",
      artist: "Ed Sheeran ",
      img_src: "./images/shape-of-you.jpg",
      src: "./music/shapeofyou.mpeg"
    },
    {
      title: "Perfect",
      artist: "Ed Sheeran ",
      img_src: "./images/perfect.jpeg",

      src: "./music/perfect-edsheren.mpeg"
    },
    {
      title: "Nach Meri Rani",
      artist: "Yo Yo Honey Singh",
      img_src: "./images/nach-meri-rani.jpg",
      src: "./music/Naach Meri Rani.mp3",
    },
   
    {
      title: "Burj Khalifa",
      artist: "Shashi",
      img_src: "./images/burjkalifa.jpg",
      src: "./music/BurjKhalifa.mp3",
    },
   
    {
      title: "Play Date",
      artist: "Melanie martinez",
      img_src: "./images/playdate.jpg",
      src: "./music/Play date- Melanie martinez.mpeg"
    },

    {
      title: "You're Perfect",
      artist: "Charly Black",
      img_src: "./images/youre-perfect.jpg",
      src: "./music/Charly Black - You're Perfect .mpeg"
    },
    {
      title: "FRIENDS ",
      artist: "Marshmello & Anne-Marie ",
      img_src: "./images/Friends.jpg",
      src: "./music/Marshmello & Anne-Marie - FRIENDS.mpeg"
    },
    {
      title: "Kill This Love ",
      artist: "BlackPink ",
      img_src: "./images/kill-this-love.jpg",
      src: "./music/black-pink.mpeg"
    },
   
    {
      title: "Heartbeat ",
      artist: "BTS ",
      img_src: "./images/heartbeat-bts.jpg",
      src: "./music/heartbeat-bts.mpeg"
    },
    {
      title: "Cheap Thrills ",
      artist: "Sia",
      img_src: "./images/cheap-thrills.jpg",
      src: "./music/cheap-thrills.mpeg"
    },
   
    {
      title: "Beautiful",
      artist: "One Direction",
      img_src: "./images/one-di.jpg",
      src: "./music/beautiful-one-dire.mpeg"
    },
    {
      title: "Leave The Door Open",
      artist: "Bruno Mars ",
      img_src: "./images/bruno.jpg",
      src: "./music/whatyoudoing-whereyouat.mpeg"
    },
    {
      title: "DNA",
      artist: "BTS ",
      img_src: "./images/dna-be.jpg",
      src: "./music/BTS-dna.mpeg"
    },
    {
      title: "Dynamite",
      artist: "BTS",
      img_src: "./images/dynamite-bts.webp",
      src: "./music/dynamite-bts.mpeg"
    },
    {
      title: "Perfect Body ",
      artist: "Charly black",
      img_src: "./images/charly.jpg",
      src: "./music/Charly black- prefect body with perfect smile.mpeg"
    },
  
    {
      title: "Brown Munde",
      artist: "Ap dhillon ",
      img_src: "./images/brown.jpg",
      src: "./music/Brown Munde-Ap dhillon.mpeg"
    },
    {
      title: "Aankhon Mein Teri",
      artist: "om shanti om ",
      img_src: "./images/akho.jpg",
      src: "./music/Aankhon mein teri aajab  si- om shanti om.mpeg"
    },
  
    {
      title: "     Colors ",
      artist: "Stella Jang ",
      img_src: "./images/stella.jpg",

      src: "./music/Stella Jang - Colors .mpeg"
    },
    
    {
      title: "Titaliya",
      artist: "Hardy Sandhu",
      img_src: "./images/titaliya.jpg",
      src: "./music/Titliaan Warga.mp3",
    },
    {
      title: "Care Ni Karda",
      artist: "Yo Yo Honey Singh",
      img_src: "./images/care-ni-karda.jpg",
      src: "./music/Care Ni Karda.mp3",
    },
    {
      title: "Tango Del Fuego",
      artist: "Parov Stelar",
      img_src: "./images/ParovStelarGeorgiaGibbs-TangoDelFuego.jpg",
      src: "./music/ParovStelarGeorgiaGibbs-TangoDelFuego.mp3",
    },
    {
      title: "Take You Dancing",
      artist: "Jason Derulo",
      img_src: "./images/JasonDerulo-TakeYouDancing.jpg",
      src: "./music/JasonDerulo-TakeYouDancing.mp3",
    },
    {
      title: "Daisy",
      artist: "Ashnikko",
      img_src: "./images/Ashnikko-Daisy.jpg",
      src: "./music/Ashnikko-Daisy.mp3",
    },
    {
      title: "Dolly Song",
      artist: "Partz Grimbad",
      img_src: "./images/PatzGrimbard-DollySong.jpg",
      src: "./music/PatzGrimbard-DollySong.mp3",
    },
    {
      title: "Liggi",
      artist: "Ritviz ",
      img_src: "./images/ritviz.jpg",
      src: "./music/ritvij-liggi.mpeg"
    },

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const [nextSongIndex, setNextSongIndex] = useState(0);

useEffect( ()=>{
setNextSongIndex(()=>{
  if(currentSongIndex + 1 > songs.length -1) {
    return 0;
  }
  else {
    return currentSongIndex + 1;
  }
})
  },[currentSongIndex,songs.length]
)


  return (
    <div className="App">

      <Player
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
      />
    </div>
  );
}

export default App;
