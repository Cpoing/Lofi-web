import React from "react";
import { useEffect, useState } from "react";
import RainASMR from "../Sounds/rain.mp3";
import OceanASMR from "../Sounds/Ocean.mp3";
import whiteNoiseASMR from "../Sounds/whiteNoise.mp3";
import waves from "../images/waves.png";
import WhiteNoise from "../images/whiteNoise.png";
import { motion } from "framer-motion";
import { BsCloudRainFill, BsSoundwave } from "react-icons/bs";
import { TbBeach } from "react-icons/tb";

const Rain = new Audio(RainASMR);
const Ocean = new Audio(OceanASMR);
const whiteNoise = new Audio(whiteNoiseASMR);

const AdditionSettings = (props) => {
  const [rainVolume, setRainVolume] = useState(0);
  const [oceanVolume, setOceanVolume] = useState(0);
  const [whiteNoiseVolume, setWhiteNoiseVolume] = useState(0);

  const [transitionValue, setTransitionValue] = useState(0);
  const [TitleLocation, setTitleLocation] = useState(350);

  Ocean.volume = oceanVolume;
  Rain.volume = rainVolume;
  whiteNoise.volume = whiteNoiseVolume;

  Rain.play();
  Ocean.play();
  whiteNoise.play();

  const setTransition = () => {
    setTransitionValue(0);
  };

  setTimeout(function () {
    setTransitionValue(-450);
    setTitleLocation(420);
  }, 2000);

  useEffect(() => {
    setTransition();
    setTitleLocation(1000);
  }, [props.radio]);

  return (
    <div className="infoContainer">
      <div className="time"></div>
      <div className="songName">
        <motion.div
          animate={{ x: transitionValue }}
          transition={{ delay: 1 }}
          className="radioStationTitle"
          style={{ left: TitleLocation }}
        >
          {props.radio}
        </motion.div>
      </div>
      <div className="otherSoundsContainer">
        <div className="allign">
          <input
            className="soundDial"
            type="range"
            orient="vertical"
            min={0}
            max={1}
            value={oceanVolume}
            onChange={(event) => {
              setOceanVolume(event.target.valueAsNumber);
            }}
            step={0.2}
          />
          <div className="otherSounds">
            <TbBeach
              style={{ margin: "0px", height: "20px", width: "20px" }}
            ></TbBeach>
          </div>
        </div>
        <div className="allign">
          <input
            className="soundDial"
            type="range"
            orient="vertical"
            min={0}
            max={1}
            value={whiteNoiseVolume}
            onChange={(event) => {
              setWhiteNoiseVolume(event.target.valueAsNumber);
            }}
            step={0.2}
          />
          <div className="otherSounds">
            <BsSoundwave
              style={{ margin: "0px", height: "20px", width: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionSettings;
