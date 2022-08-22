import React from "react";
import ReactPlayer from "react-player";
import YouTube from "react-youtube";

export default function YoutubeMovie() {
  return (
    <div
      style={{
        padding: "10px 20px",
        textAlign: "center",
        backgroundColor: "SeaShell",
      }}
    >
      <div className="paper" style={{ marginTop: "20px" }}>
        <div
          style={{
            border: "1px solid lightgray",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              fontFamily: "MapoFlowerIsland",
              fontSize: "15pt",
              marginTop: "20px",
              marginBottom: "20px"
            }}
          >
            <text>영상 보기</text>
          </div>
          <div style={{
             display: "flex",
             justifyContent: "center",
             marginBottom:"20px",
             padding:"0px",
          }} >
            <YouTube
              videoId="GA8Lwg4dzMY"
              className="youtube"
              muted={false}
              controls={true}
              playing={false}
              playsinline={true}
              opts={{
                margin:"0",
                width:"100%",
                height:"100%"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
