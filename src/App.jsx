import { useState } from "react";
import "./App.css";
import RadioStations from "./components/radioStations";
import { setActiveStation } from "./hooks/setActiveStation";
import play from "./images/playBtn.png";
import pauseImg from "./images/pause.png";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { setActiveStation } from "./hooks/setActiveStation";
import PauseImage from "./components/pauseImage";
import AdditionSettings from "./components/additionalInfo";

function App() {
  const [BtnClass, setBtnClass] = useState("PlayPause");
  const [BtnClass2, setBtnClass2] = useState("playBtn");
  const [playPauseImg, setPlayPause] = useState(play);

  const [video, setVideo] = useState(
    `//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1`,
  );
  const [activeStation, setActiveStationState] = useState(false);
  const [youtubeChannel, setYoutubeChannel] = useState("");
  const [stationName, setStationName] = useState("LofiGirl");

  const [livestream, playLiveStream] = useState(false);
  const [pauseScreen, setPauseScreen] = useState("pauseScreen");
  const [currentLivestream, setLivestream] = useState(
    "https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl",
  );

  const LofiGirlVideo = () => {
    setVideo("//www.youtube.com/embed/TURbeWK2wwg?autoplay=1&mute=1&start=1");
    setStationName("LofiGirl");
    setYoutubeChannel(
      "https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow",
    );
    setLivestream(
      "https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl",
    );
    playLiveStream(true);
    setActiveStationState(true);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const AmbientRenders = (e) => {
    setVideo("//www.youtube.com/embed/hBGbt2CRDpA?autoplay=1&mute=1&start=1");
    setStationName("Ambient Renders");
    setYoutubeChannel(
      "https://www.youtube.com/channel/UCXbXfisDHV_gDjawCKTyTIw",
    );
    setLivestream(
      "https://www.youtube.com/watch?v=CoP5wLD9clU&ab_channel=AmbientRenders",
    );
    playLiveStream(true);
    setActiveStation(e, stationName);
    setActiveStationState(false);
    setPauseScreen("unpauseScreen");
    setPlayPause(pauseImg);
    setBtnClass("PlayPause2");
    setBtnClass2("playBtn2");
  };

  const handlePausePlaySwitch = (e) => {
    let className = e.target.className;

    if (className === "PlayPause" || className === "playBtn") {
      setPlayPause(pauseImg);
      setBtnClass("PlayPause2");
      setBtnClass2("playBtn2");
      start();
    } else if (className === "PlayPause2" || className === "playBtn2") {
      setPlayPause(play);
      setBtnClass("PlayPause");
      setBtnClass2("playBtn");
      pause();
    }
  };

  const start = () => {
    playLiveStream(false);
    playLiveStream(true);
    setPauseScreen("unpauseScreen");
  };

  const pause = () => {
    setPauseScreen("pauseScreen");
    playLiveStream(false);
  };

  return (
    <div className="interfaceContainer">
      <div className="radioContainer">
        <div className="logo">LofiWave</div>
        <div className="radioListContainer">
          <RadioStations Ambient={AmbientRenders} Lofi={LofiGirlVideo} />
        </div>

        <div className="audioControlContainer"></div>
        <AudioControls
          playPause={handlePausePlaySwitch}
          buttonClass={BtnClass}
          playPauseImage={playPauseImg}
          buttonClass2={BtnClass2}
          LiveStreamAudio={currentLivestream}
          LiveStreamPlayPause={livestream}
        />
      </div>
      <div className={pauseScreen}>
        <PauseImage />
        <p style={{ marginTop: "0rem" }}>Music Paused</p>
      </div>
      <AdditionSettings youtube={youtubeChannel} radio={stationName} />
      <div class="videoContainer">
        <ReactPlayer
          className="vid"
          width="140%"
          height="140%"
          loop="true"
          playing={livestream}
          volume="mute"
          url={video}
        />
      </div>
    </div>
  );
}

export default App;
