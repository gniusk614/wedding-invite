import React from "react";
import "./TimerComponent.css";

export default function Presenter(props) {
  let days = props.days;
  let hours = props.hours;
  let minutes = props.minutes;
  let seconds = props.seconds;

  return (
    <div
      style={{ padding: "20px", backgroundColor: "SeaShell" }}
    >
      <div className="paper" style={{backgroundColor:"#FFFFFF", padding:"10px 10px 10px 10px", marginTop:"10px"}}>
        <div
          style={{
            border: "1px solid lightgray",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <span
            style={{ fontFamily: "MapoFlowerIsland", fontSize: "15pt" }}
          >
            우리 결혼까지
          </span>
          <div className="countdown-wrapper">
            {days !== 0 && (
              <div className="countdown-item">
                {days}
                {days < 2 ? <span> day</span> : <span> days</span>}
              </div>
            )}
            {(days !== 0 || hours !== 0) && (
              <div className="countdown-item">
                {hours}
                {hours < 2 ? <span> hour</span> : <span> hours</span>}
              </div>
            )}
            {(days !== 0 || hours !== 0 || minutes !== 0) && (
              <div className="countdown-item">
                {minutes}
                {minutes < 2 ? <span> minute</span> : <span> minutes</span>}
              </div>
            )}
            {
              <div className="countdown-item">
                {seconds}
                {seconds < 2 ? <span> second</span> : <span> seconds</span>}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
