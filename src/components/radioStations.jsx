import React from "react";
import { setActiveStation } from "../hooks/setActiveStation";
import { motion } from "framer-motion";

const RadioStations = ({ Ambient }) => {
  return (
    <div className="radioList">
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Ambient}
          className={
            setActiveStation(StationName) === "Ambient Renders"
              ? "activeStation"
              : "station"
          }
        >
          <img
            className={
              setActiveStation(StationName) === "Ambient Renders"
                ? "ActiveTriangle"
                : "triangle"
            }
            src={triangle} //traingle from playBtn image
            alt=""
          />
          Ambient Renders
        </motion.div>
      </motion.div>
    </div>
  );
};
