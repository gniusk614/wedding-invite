import { Box, Button, createTheme, Fab, ThemeProvider } from "@mui/material";
import Modal from "@mui/material/Modal";
import icon from "../lib/img/kakaopayIcon.jpg";
import icon_g from "../lib/img/icons_3.png";
import icon_b from "../lib/img/icons_4.png";
import React from "react";


const theme = createTheme({
  palette: {
    neutral: {
      main: "#FEE500",
      contrastText: "#000000",
      light: "rgba(254,229,0,0.7)"
    },
    gray: {
      main: "#808080",
      contrastText: "#FFFFFF",
    },
  },
});

function PayLink() {
  const hrefHandler = (i) => {
    alert("카카오페이로 이동합니다. 이미 설치가 되어있는 경우 화면 하단 앱 열기를 눌러주세요.")
    switch (i) {
      case "m":
        window.location.href = "http://kko.to/E6ykpwJzv";
        break;
      case "f":
        window.location.href = "http://kko.to/_sHVig1aj";
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "20px" }}>
          <Fab variant="extended" onClick={() => hrefHandler("m")} color="neutral" sx={{"fontFamily":"S-CoreDream-4Regular"}} >
            <img src={icon_g} style={{"width":"20px"}}></img> &nbsp;신랑에게
          </Fab>
        </div>
        <div style={{ margin: "20px" }}>
          <Fab variant="extended" onClick={() => hrefHandler("f")} color="neutral" sx={{"fontFamily":"S-CoreDream-4Regular"}}>
          <img src={icon_b} style={{"width":"20px"}}></img> &nbsp;신부에게
          </Fab>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default function KakaoPayLink() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    outline: "none",
    bgcolor: "transparent",
    p: 4,
  };

  return (
    <>
      <div
        onClick={handleOpen}
        style={{
          fontFamily: "S-CoreDream-4Regular",
          padding: "10px",
          margin: "5px",
          fontSize: "small",
          width: "90%",
          textAlign: "center",
          backgroundColor: "#FEE500",
          cursor: "pointer",
        }}
      >
        <img src={icon} style={{ width: "40px", verticalAlign: "middle" }} />
        &nbsp;송금하기
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <div style={{ float: "right" }}></div>
            <div>
              <PayLink />
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
