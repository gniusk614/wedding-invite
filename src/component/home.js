import * as React from "react";
import Container from "./content";
import logo from "../lib/img/pic_7.jpg";
import img1 from "../lib/img/img2.png";
import video2 from "../lib/img/video_2.mov";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { MdCall } from "react-icons/md";
import Gallery from "./profile";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PhoneInfo from "./phoneInfo";
import { AiOutlineClose } from "react-icons/ai";
import YoutubeMovie from "./movie";
import PayInfo from "./pay";
import ShareBox from "./share";



const Calendar = () => {
  const style = {
    fontFamily: "MapoFlowerIsland",
    fontSize: "15pt",
    padding: "20px 20px 40px 20px",
  };
  const imgStyle = {
    margin: "15px",
    width: "60%",
  };
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const [info, setInfo] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);





  return (
    <div>
      <div style={{ position: "relative", width: "100%" }}>
        <div className="videoTextBox">
          <b>Wedding Day</b>
          <br />
          <text style={{ fontSize: "small" }}>
            강 광 훈 &nbsp;&nbsp;&nbsp;&nbsp; 이 희 연
          </text>
          <br />
          <text style={{ fontSize: "small" }}>2022년 10월 8일 오전 11시</text>
          <br />
          <text style={{ fontSize: "small" }}>더 리버사이드호텔 노벨라홀</text>
        </div>
        <video playsInline autoPlay muted loop className="video">
          <source src={video2} type="video/mp4" />
        </video>
      </div>

      <div style={{ padding: "20px", backgroundColor: "SeaShell" }}>
        <div className="paper">
          <div
            style={{
              border: "1px solid lightgray",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <div>
              <img src={img1} style={imgStyle}></img>
            </div>
            <div style={style}>
              결<br />
              혼<br />
              합<br />
              니<br />
              다<br />
              <hr
                style={{
                  width: "20px",
                  height: "0.5px",
                  border: "0",
                  backgroundColor: "black",
                }}
              ></hr>
            </div>

            <div>
              <img src={logo} style={imgStyle}></img>
            </div>
            <div style={style}>
              강광훈 <span style={{ fontSize: "10pt" }}>그리고</span> 이희연
              <br />
              <br />
              <span style={{ fontSize: "10pt" }}>
                2022년 10월 8일 토요일 오전 11시
              </span>
              <br />
              <span style={{ fontSize: "10pt" }}>
                신사 더 리버사이드호텔 노벨라홀
              </span>
            </div>
            <hr
              style={{
                width: "50%",
                height: "0.2px",
                border: "0",
                backgroundColor: "gray",
              }}
            />
            <div
              style={{
                fontFamily: "MapoFlowerIsland",
                fontSize: "15pt",
                marginTop: "40px",
                marginBottom: "30px",
                padding: "0px",
              }}
            >
              <div style={{ fontSize: "9pt", lineHeight: "20px" }}>
                부모님은 하늘로부터 받은 최고의 선물이고,
                <br />
                부부는 자신이 선택한 최고의 보물이라고 합니다.
                <br />
                이런 저희가 가을향기 아름다운 하늘빛
                <br />
                아래서 한 가정을 이루고자 합니다.
                <br />
                부디 참석하시어 기쁨의 자리를
                <br />
                축복으로 더욱 빛내주시기 바랍니다.
              </div>
              <br />
              <div>
                <text style={{ fontSize: "11pt" }}>강병우 · 장상희의 첫째</text>{" "}
                광훈
                <br />
                <text style={{ fontSize: "11pt" }}>
                  이만식 · 김정미의 둘째
                </text>{" "}
                희연
              </div>
              <div style={{ marginTop: "40px", textAlign: "center" }}>
                <div style={{ display: "inline-block" }}>
                  <Stack spacing={5} direction="row">
                    <Button
                      onClick={() => {
                        handleOpen();
                        setInfo("groom");
                      }}
                      size="medium"
                      color="primary"
                      variant="outlined"
                      startIcon={<MdCall />}
                    >
                      신랑측
                      <br /> 연락처
                    </Button>
                    <Button
                      onClick={() => {
                        handleOpen();
                        setInfo("bride");
                      }}
                      size="medium"
                      color="error"
                      variant="outlined"
                      startIcon={<MdCall />}
                    >
                      신부측
                      <br /> 연락처
                    </Button>
                  </Stack>
                  <div>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={modalStyle}>
                        <div style={{float:"right"}}>
                          <AiOutlineClose size={20} onClick={handleClose} style={{"cursor":"pointer"}} />
                        </div>
                        <PhoneInfo Info={info} />
                      </Box>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default function Home() {
  return (
    <div>
      <Calendar />
      <Container />
      <Gallery />
      <YoutubeMovie/>
      <PayInfo/>
      <ShareBox/>
      <div style={{ backgroundColor: "SeaShell", height: "100px" }}></div>
    </div>
  );
}
