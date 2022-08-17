import * as React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, autocompleteClasses, Chip } from "@mui/material";
import img_1 from "../lib/img/gallery/pic_1.jpg";
import img_2 from "../lib/img/gallery/pic_2.jpg";
import img_3 from "../lib/img/gallery/pic_3.jpg";
import img_4 from "../lib/img/gallery/pic_4.jpg";
import img_5 from "../lib/img/gallery/pic_5.jpg";
import img_6 from "../lib/img/gallery/pic_6.jpg";
import img_7 from "../lib/img/gallery/pic_7.jpg";
import img_8 from "../lib/img/gallery/pic_8.jpg";
import img_9 from "../lib/img/gallery/pic_9.jpg";
import img_10 from "../lib/img/gallery/pic_10.jpg";
import img_11 from "../lib/img/gallery/pic_11.jpg";
import img_12 from "../lib/img/gallery/pic_12.jpg";
import img_13 from "../lib/img/gallery/pic_13.jpg";
import img_14 from "../lib/img/gallery/pic_14.jpg";
import img_15 from "../lib/img/gallery/pic_15.jpg";
import img_16 from "../lib/img/gallery/pic_16.jpg";
import img_17 from "../lib/img/gallery/pic_17.jpg";
import img_18 from "../lib/img/gallery/pic_18.jpg";
import img_19 from "../lib/img/gallery/pic_19.jpg";
import img_20 from "../lib/img/gallery/pic_20.jpg";
import img_21 from "../lib/img/gallery/pic_21.jpg";
import img_22 from "../lib/img/gallery/pic_22.jpg";
import img_23 from "../lib/img/gallery/pic_23.jpg";
import img_24 from "../lib/img/gallery/pic_24.jpg";
import img_25 from "../lib/img/gallery/pic_25.jpg";
import img_26 from "../lib/img/gallery/pic_26.jpg";
import Modal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai";
import Box from "@mui/material/Box";
import { display } from "@mui/system";

export default function Gallery() {
  var items = [
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_8,
    img_9,
    img_10,
    img_11,
    img_12,
    img_13,
    img_15,
    img_16,
    img_17,
    img_18,
    img_19,
    img_20,
    img_21,
    img_22,
    img_23,
    img_24,
    img_25,
    img_26,
    img_14,
    img_7,
  ];

  let [more, setMore] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [index, setIndex] = React.useState(0);

  const onClickMore = () => {
    if (more == false) {
      setMore(true);
    } else {
      setMore(false);
    }
  };

  const PhotoFull = () => {
    return (
      <Carousel
        index={index}
        autoPlay={false}
        animation="slide"
        indicators={false}
      >
        {items.map((item, i) => (
          <div onClick={handleClose} style={{"display":"flex","justifyContent":"center"}}>
            <img key={i} src={item} style={{ maxWidth:"100vw", height:"100vh", zIndex: "1",objectFit:"contain" }}></img>
          </div>
        ))}
      </Carousel>
    );
  };

  const Photo = () => {
    var element = [];

    if (more === false) {
      element = items.slice(0, 6);
    } else {
      element = items;
    }

    const modalStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height:"100vh",
      outline: "none",
    };

    return (
      <div>
        <div>
          {element.map((item, i) => (
            <span
              key={i}
              onClick={(e) => {
                e.preventDefault();
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={item}
                style={{ width: "100px", height: "100px", objectFit: "cover", transform: "translate(50, 50)", margin: "2px", cursor: "pointer" }}
              ></img>
            </span>
          ))}
        </div>
        <div>
          <Modal open={open} onClose={handleClose}>
              <PhotoFull />
          </Modal>
        </div>
      </div>
    );
  };

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
              marginBottom: "40px",
            }}
          >
            <text>우리의 소중한 순간</text>
          </div>
          <Photo />
          <div style={{ marginTop: "10px" }}>
            <Chip
              label={more === false ? "더보기" : "접기"}
              onClick={onClickMore}
              variant="outlined"

            />
          </div>
        </div>
      </div>
    </div>
  );
}
