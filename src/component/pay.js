import { Box, Button } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import Modal from '@mui/material/Modal';
import icon from "../lib/img/kakaopayIcon.jpg";
import React from "react";
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { purple, red } from '@mui/material/colors';
import KakaoPay from "./kakaoPay";
import KakaoPayLink from "./kakaoPay";
import { CopyToClipboard } from 'react-copy-to-clipboard'

const payNumber = {
  "groom": {
    "bank": "국민은행",
    "name": "강광훈",
    "number": "604402-01-455355"
  },
  "groomF": {
    "bank": "농협은행",
    "name": "강병우",
    "number": "171625-51-037691"
  },
  "groomM": {
    "bank": "농협은행",
    "name": "장상희",
    "number": "235084-56-153029"
  },
  "bride": {
    "bank": "국민은행",
    "name": "이희연",
    "number": "353902-01-105495"
  },
  "brideM": {
    "bank": "우리은행",
    "name": "김정미",
    "number": "324-08-001533"
  }
  // "brideF": {
  //   "bank": "우리은행",
  //   "name": "김정미",
  //   "number": "32408001533"
  // }
}



function Pay(props) {


  // console.log(props.Info)
  let list = [];
  let person = "";

  switch (props.Info) {
    case "groom":
      // console.log("groom");
      list = [
        payNumber.groom,
        payNumber.groomF,
        payNumber.groomM
      ];
      person = "신랑";
      break;
    case "bride":
      list = [
        payNumber.bride,
        // payNumber.brideF,
        payNumber.brideM
      ];
      person = "신부";
      // console.log("bride");
      break;
  }

//   const copyHandler = async (i) => {
//     // await navigator.clipboard.writeText(`${list[i].number} ${list[i].bank} ${list[i].name}`)
//     // .then(function(){
//     //   alert("계좌번호를 복사했습니다.")
//     // });
//    return(
//     <CopyToClipboard text={url}
//           onCopy={() => this.setState({copied: true})}>
//     <!-- 생략 -->
// </CopyToClipboard>
//     )
//   }


  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell align="center" colSpan={2} component="th" style={{ "fontFamily": "MapoFlowerIsland", "textAlign": "center" }}>
                <font size={4}>{person == "신랑" ? "신랑에게" : "신부에게"}</font>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                {list[0].bank}(예금주:{list[0].name})<br />
                {list[0].number}
              </TableCell>
              <TableCell align="center">

              <CopyToClipboard text={`${list[0].number} ${list[0].bank} ${list[0].name}`} onCopy={()=>alert("계좌가 복사되었습니다")}>
                <Button color="error" size="small" variant="outlined">복사</Button>
              </CopyToClipboard>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" colSpan={2} component="th" style={{ "fontFamily": "MapoFlowerIsland", "textAlign": "center" }}>
                <font size={4}>{person == "신랑" ? "신랑 측 혼주에게" : "신부 측 혼주에게"}</font>
              </TableCell>
            </TableRow>


            {list.slice(1).map((item, index) => 
              <TableRow key={index}>
                <TableCell align="center">
                  {item.bank}(예금주:{item.name})<br />
                  {item.number}
                </TableCell>
                <TableCell align="center">
                <CopyToClipboard text={`${list[index+1].number} ${list[index+1].bank} ${list[index+1].name}`} onCopy={()=>alert("계좌가 복사되었습니다")}>
                <Button color="error" size="small" variant="outlined">복사</Button>
              </CopyToClipboard>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )

}


export default function PayInfo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [info, setInfo] = React.useState("");

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    outline: "none",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
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
              marginBottom: "20px",
            }}
          >
            <text>마음을 전하는 곳</text>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <KakaoPayLink/>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              onClick={() => {
                handleOpen()
                setInfo("groom")
              }}
              style={{
                fontFamily: "S-CoreDream-4Regular",
                padding: "10px",
                margin: "5px",
                fontSize: "small",
                width: "90%",
                textAlign: "center",
                backgroundColor: "lightgray",
                cursor: "pointer",
              }}
            >
              신랑측에게
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              onClick={() => {
                handleOpen()
                setInfo("bride")
              }}
              style={{
                fontFamily: "S-CoreDream-4Regular",
                padding: "10px",
                margin: "5px",
                fontSize: "small",
                width: "90%",
                textAlign: "center",
                backgroundColor: "lightgray",
                cursor: "pointer",
              }}
            >
              신부측에게
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <div style={{ float: "right" }}>
              <AiOutlineClose
                size={20}
                onClick={handleClose}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div>
              <Pay Info={info} />
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
