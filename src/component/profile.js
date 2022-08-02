import * as React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, autocompleteClasses } from "@mui/material";
import img_1 from "../lib/img/pic_1.jpg";
import img_2 from "../lib/img/pic_2.JPG";
import img_3 from "../lib/img/pic_7.jpg";
import img_4 from "../lib/img/pic_4.jpg";
import img_5 from "../lib/img/pic_5.jpg";
import img_6 from "../lib/img/pic_6.jpg";

export default function Gallery() {
  var items = [img_1, img_2, img_3, img_4, img_5, img_6];

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
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <div style={{ fontFamily: "MapoFlowerIsland", fontSize: "15pt", marginTop: "20px", marginBottom: "40px" }}>
            <text>
              우리의 소중한 순간
            </text>
          </div>
          <div>
            {items.map((item, i) => (
              <img key={i} src={item} style={{ width: "30%", margin: "2px" }}></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
