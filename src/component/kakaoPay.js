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



function PayLink() {


    const hrefHandler = (i) => {

        switch (i) {
            case "m": window.location.href = "http://kko.to/E6ykpwJzv"; break;
            case "f": window.location.href = "http://kko.to/_sHVig1aj"; break;
        }


    }


    return (
        <div>
            <div onClick={() => hrefHandler("m")} style={{ "margin":"10px", width: "50%", "backgroundColor": "gray" }}>
                신랑에게 송금하기
            </div>
            <div onClick={() => hrefHandler("f")} style={{"margin":"10px", "width": "50%", "backgroundColor": "gray" }}>
                신부에게 송금하기
            </div>
        </div>
    )

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
        width: 350,
        outline: "none",
        bgcolor: 'background.paper',
        boxShadow: 24,
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
                <img
                    src={icon}
                    style={{ width: "40px", verticalAlign: "middle" }}
                />
                &nbsp;송금하기
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
                            <PayLink />
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}