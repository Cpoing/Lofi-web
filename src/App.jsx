import { useState } from "react";
import "./App.css";
import RadioStations from "./components/radioStations";
import { setActiveStation } from "./hooks/setActiveStation";

function App() {
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

  return (
    <div className="interfaceContainer">
      <div className="radioContainer">
        <div className="logo">LofiWave</div>
        <div className="radioListContainer">
          <RadioStations Ambient={AmbientRenders} />
        </div>
      </div>

      <div className="audioControlContainer"></div>
    </div>
  );
}

export default App;
