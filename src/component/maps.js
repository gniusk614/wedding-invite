import { Button, TableHead } from "@mui/material";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles/";
import { createTheme } from "@mui/material/styles/";
import { FaMapMarkedAlt } from "react-icons/fa";
import img from "../lib/img/locate01.jpg";


const theme = createTheme({
  palette: {
    neutral: {
      main: "#FEE500",
      contrastText: "#000000",
      light: "rgba(254,229,0,0.7)",
    },
    gray: {
      main: "lightgray",
      contrastText: "black",
    },
  },
  overrides: {
    MuiTableCell: {
      root: {
       padding:0
      },
    },
  },
});

const { kakao } = window;

export default function Maps() {
  const [map, setMap] = React.useState(null);

  React.useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.51859197140272, 127.01818932184473),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);
    setMap(map);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      37.51859197140272,
      127.01818932184473
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  }, []);

  function moveLink() {
    window.open(
      "https://map.kakao.com/link/to/더리버사이드호텔,37.51859197140272,127.01818932184473"
    );
  }

  return (
    <div
      style={{
        padding: "10px 20px",
        textAlign: "center",
        backgroundColor: "SeaShell",
      }}
    >
      <ThemeProvider theme={theme}>
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
              <text>찾아 오시는 길</text>
            </div>
            <div
              id="map"
              style={{
                width: "100%",
                height: "300px",
              }}
            >
              지도
            </div>
            <div style={{ margin: "10px" }}>
              <Button disableElevation variant="contained" color="gray" onClick={moveLink}>
                <FaMapMarkedAlt />
                <font style={{ fontFamily: "S-CoreDream-4Regular" }} size={2}>
                  &nbsp;길찾기
                </font>
              </Button>
            </div>
            <div>
              <div
                style={{
                  marginTop: "40px",
                  marginBottom: "10px",
                  fontFamily: "MapoFlowerIsland",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    height: "40px",
                    width: "50%",
                    border: "1px solid gray",
                    lineHeight: "40px",
                  }}
                >
                  교통편 이용 안내
                </div>
              </div>
                <table
                    className="busTable"
                  aria-label="simple table"
                  style={{
                    marginTop:"30px",
                    fontFamily: "S-CoreDream-4Regular",
                    textAlign: "center",
                    fontSize:"7pt",
                    width:"100%",
                    padding: "0px"
                  }}
                >
                  <tbody>
                    <tr>
                      <th align="center" width="20%">
                        <b>지하철</b><br/> 이용시
                      </th>
                      <td align="left" component="th">
                        <font>3호선 신사역</font>에서 하차 후,
                        <font>5번 출구</font>에서 도보 3분거리
                        <br />
                        <font>신분당선 신사역</font>에서 하차 후,
                        <font>5번 출구</font>에서 도보 3분거리
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <th align="center" component="th" width="20%">
                        <b>버스</b><br/>이용시
                      </th>
                      <td align="left" component="th" >
                        <tr>
                          <th width="20%">간선</th>
                          <td className="ntd" align="left" >142, 145, 148, 240, 441, 542</td>
                        </tr>
                        <tr>
                          <th width="20%">지선</th>
                          <td className="ntd" align="left" >4212, 4412, 강남08, 서초03</td>
                        </tr>
                        <tr>
                          <th width="20%">광역</th>
                          <td className="ntd" align="left" >1100, 3030, 8001, 9202, 9404</td>
                        </tr>
                      </td>
                      
                    </tr>
                    <tr>
                      <th align="center" component="th" width="20%">
                        <b>자가용</b><br/> 이용시
                      </th>
                      <td align="left" component="td" >
                        <font>3호선 신사역</font>에서 하차 후 ,
                        <font>5번 출구</font>에서 도보 3분거리
                        <br />
                        <font>신분당선 신사역</font>에서 하차 후 ,
                        <font>5번 출구</font>에서 도보 3분거리
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img src={img} style={{"width":"100%"}}></img>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
