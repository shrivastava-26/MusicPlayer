import React, { useRef, useState, useEffect } from "react";
import { bollywoodSongs } from "../assets/Song"
import { FaForward, FaBackward, FaCirclePause, FaPlay } from "react-icons/fa6";
// import { FaCirclePause, FaPlay } from "react-icons/fa6";
import { RiLoopLeftLine } from "react-icons/ri";
import { FaRandom } from "react-icons/fa";
import style from "./Music.module.css"

function Music() {
  //! create states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  //! current song
  const currentSong = bollywoodSongs[currentIndex];

  //! create useRef hooks
  const songRef = useRef(null);

  //! play and pause function
  const playPause = () => {
    if (isPlay) {
      songRef.current.pause();
    } else {
      songRef.current.play();
    }
    setIsPlay(!isPlay);
  };

  //! format time
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  //! timeHandler
  const timeHandler = () => {
    setCurrentTime(songRef.current.currentTime);
  };

  //! dragHandler
  const dragHandler = (e) => {
    songRef.current.currentTime = e.target.value;
  };

  //! songChangeHandler and shuffle
  const songChangeHandler = (direction) => {
    if (isShuffle) {
      setCurrentIndex(Math.floor(Math.random() * bollywoodSongs.length));
    } else {
      if (direction === "changeForward") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bollywoodSongs.length);
      } else if (direction === "changeBackward") {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + bollywoodSongs.length) % bollywoodSongs.length
        );
      }
    }
  };

  //! toggleLoop
  const toggleLoop = () => {
    setIsLoop(!isLoop);
    if (songRef.current) {
      songRef.current.loop = !isLoop;
    }
  };

  //! toggle shuffle
  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  //! duration showing
  const durationShow = () => {
    setDuration(songRef.current.duration);
  };

  //! Automatic play on song change
  useEffect(() => {
    if (songRef.current) {
      songRef.current.onended = () => {
        if (!isLoop) {
          songChangeHandler("changeForward");
        }
      };
    }
  }, [isLoop, isShuffle, currentIndex]);

  return (
    <div className={style.parent}>
      <div className={style.childParent}>
        <h1>{currentSong.title}</h1>

        {/* <video
          ref={videoRef}
          src={currentSong.video}
          autoPlay
          loop
          controls
          className={style.video}
        ></video> */}

        <img src={currentSong.image} alt={currentSong.title} />

        <audio
          ref={songRef}
          src={currentSong.src}
          onTimeUpdate={timeHandler}
          onLoadedMetadata={durationShow}
          loop={isLoop}
        ></audio>

        <div className={style.details}>
          <p>
            <span>Artist: {currentSong.artist}</span>
            <br />
            <span>Album: {currentSong.album}</span>
          </p>
        </div>

        <div className={style.input}>
          <span>{formatTime(currentTime)}</span>

          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={dragHandler}
          />
          <span>{formatTime(duration)}</span>
        </div>

        <div className={style.wrapBtn}>
          <div className={style.btns}>
            <button onClick={() => songChangeHandler("changeBackward")}>
              <FaBackward />
            </button>

            <button onClick={playPause}>
              {isPlay ? <FaCirclePause /> : <FaPlay />}
            </button>

            <button onClick={() => songChangeHandler("changeForward")}>
              <FaForward />
            </button>
          </div>
          <div className={style.options}>
            <button onClick={toggleLoop} className={isLoop ? style.active : ""}>
              <RiLoopLeftLine
                style={{
                  color: isLoop ? "blue" : "black",
                  fontWeight: "bolder",
                  fontSize: "1.5em",
                }}
              />
            </button>
            <button
              onClick={toggleShuffle}
              className={isShuffle ? style.active : ""}
            >
              <FaRandom
                style={{
                  color: isShuffle ? "blue" : "black",
                  fontWeight: "bold",
                  fontSize: "1.5em",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
