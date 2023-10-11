import React from 'react';
import { MdCall } from "react-icons/md";
import { FaSms } from "react-icons/fa";
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



export default function PhoneInfo(props) {


    // console.log(props.Info)

    let list = [];
    let person = "";

    switch (props.Info) {
        case "groom":
            // console.log("groom");
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
            // console.log("bride");
            break;
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
                                <MdCall color='BurlyWood' size={25} onClick={() => clickCall(list[0])} />
                            </TableCell>
                            <TableCell align="center">
                                <FaSms color="BurlyWood" size={25} onClick={() => clickSMS(list[0])} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row" style={{ "fontFamily": "MapoFlowerIsland", "fontSize": 20 }}>
                                <font size={2}>혼주</font>&nbsp;{person == "신랑" ? "강병우" : "이만식"}
                            </TableCell>
                            <TableCell align="center">
                                <MdCall color='BurlyWood' size={25} onClick={() => clickCall(list[1])} />
                            </TableCell>
                            <TableCell align="center">
                                <FaSms  color='BurlyWood' size={25} onClick={() => clickSMS(list[1])} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row" style={{ "fontFamily": "MapoFlowerIsland", "fontSize": 20 }}>
                                <font size={2}>혼주</font>&nbsp;{person == "신랑" ? "장상희" : "김정미"}
                            </TableCell>
                            <TableCell align="center">
                                <MdCall color='BurlyWood' size={25} onClick={() => clickCall(list[2])} />
                            </TableCell>
                            <TableCell align="center">
                                <FaSms color="BurlyWood" size={25} onClick={() => clickSMS(list[2])} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

}

