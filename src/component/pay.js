import { Box } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "@mui/material";
import icon from "../lib/img/kakaopayIcon.jpg";
import React from "react";
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



const phoneNumber = {
    "groom": "010-9947-4735",
    "groomF": "010-3754-4735",
    "groomM": "010-9084-4735",
    "bride": "010-7918-4060",
    "brideF": "010-9123-4063",
    "brideM": "010-5260-4063"
}



function Pay(props) {


    console.log(props.Info)

    let list = [];
    let person = "";

    switch (props.Info) {
        case "groom":
            console.log("groom");
            list = [
                phoneNumber.groom,
                phoneNumber.groomF,
                phoneNumber.groomM
            ];
            person = "신랑";
            break;
        case "bride":
            list = [
                phoneNumber.bride,
                phoneNumber.brideF,
                phoneNumber.brideM
            ];
            person = "신부";
            console.log("bride"); break;
    }


    const clickCall = (element) => {
        window.location.href = `tel:${element}`
    }
    const clickSMS = (element) => {
        try {
            window.location.href = `sms:${element}`
        } catch (e) {
            alert('문자보내기는 모바일에서만 가능합니다.')
        }
    }


    return (
        <div>
            <TableContainer>
                <Table sx={{ minWidth: 150 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={4} style={{ "fontFamily": "MapoFlowerIsland", "fontSize": "large" }}>
                                {person} 측 연락처
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row" style={{ "fontFamily": "MapoFlowerIsland", "fontSize": 20 }}>
                                <font size={2}>{person}</font>&nbsp;{person == "신랑" ? "강광훈" : "이희연"}
                            </TableCell>
                            <TableCell align="center">
                            </TableCell>
                            <TableCell align="center">
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row" style={{ "fontFamily": "MapoFlowerIsland", "fontSize": 20 }}>
                                <font size={2}>혼주</font>&nbsp;{person == "신랑" ? "강병우" : "이만식"}
                            </TableCell>
                            <TableCell align="center">
                            </TableCell>
                            <TableCell align="center">
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row" style={{ "fontFamily": "MapoFlowerIsland", "fontSize": 20 }}>
                                <font size={2}>혼주</font>&nbsp;{person == "신랑" ? "장상희" : "김정미"}
                            </TableCell>
                            <TableCell align="center">
                            </TableCell>
                            <TableCell align="center">
                            </TableCell>
                        </TableRow>
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

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    outline: "none",
    backgroundColor:"white"
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
              <img
                src={icon}
                style={{ width: "40px", verticalAlign: "middle" }}
              />
              &nbsp;송금하기
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              onClick={handleOpen}
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
              onClick={handleOpen}
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
                <Pay/>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
