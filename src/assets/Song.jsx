import bhool from "./Songs/bhool.mp3";
import banJaunga from "./Songs/banJaunga.mp3";
import kissik from "./Songs/kissik.mp3";
import zalima from "./Songs/zalima.mp3";
import tum from "./Songs/tumHiHo.mp3";
import dwapara from "./Songs/dwapara.mp3";

import bhoolImg from "./img/kartik.jpg";
import kissikImg from "./img/kissik.jpg";
import zaalimaImg from "./img/zaalima.jpg";
import tumHiImg from "./img/tumHi.jpg";
import teraBanImg from "./img/teraban.jpg";
import dwaparas from "./img/dwapara.jpeg";
import taras from "./Songs/taras.mp4";

export const bollywoodSongs = [
  {
    title: "Dwapara",
    artist: "Neeraj Shridhar",
    album: "Kannada song",
    image: dwaparas,
    src: dwapara,
    duration: "4:00",
  },
  {
    title: "Taras Nahi aya tujhko",
    artist: "shilpa rao",
    album: "Munjaya",
    src: taras,
    duration: "2:57",
  },

  {
    title: "Ankhe hai bhul bhulaiya",
    artist: "Neeraj Shridhar",
    album: "Bhool Bhulaiya",
    image: bhoolImg,
    src: bhool,
    duration: "4:00",
  },
  {
    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva, Tulsi Kumar",
    album: "Kabir Singh",
    image: teraBanImg,
    src: banJaunga,
    duration: "3:56",
  },
  {
    title: "Kissik",
    artist: "Arijit Singh",
    album: "Unknown Album",
    image: kissikImg,
    src: kissik,
    duration: "4:15",
  },
  {
    title: "Zaalima",
    artist: "Arijit Singh, Harshdeep Kaur",
    album: "Raees",
    image: zaalimaImg,
    src: zalima,
    duration: "4:59",
  },
  {
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    album: "Aashiqui 2",
    image: tumHiImg,
    src: tum,
    duration: "4:22",
  },
];

// import { useEffect } from "react";

// const Song = async() => {

//     const url = 'https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5';
//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '3600092297msh29cbe8b87e6922ep107fbfjsn4dc694f6ddb8',
// 		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
//     return result;
// }

// catch (error) {
// 	console.error(error);
// }

//    useEffect(()=>{
//     fetChApi()
//    }, [])
// }

// export default Song;
