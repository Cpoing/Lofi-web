import { useState } from "react";
import "./App.css";
import RadioStations from "./components/radioStations";
import { setActiveStation } from "./hooks/setActiveStation";
import play from "./images/playBtn.png";
import pauseImg from "./images/pause.png";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { setActiveStation } from "./hooks/setActiveStation";
import { i } from "vite/dist/node/types.d-aGj9QkWt";

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
      </div>

      <div className="audioControlContainer"></div>
    </div>
  );
}

export default App;
