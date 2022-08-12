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
        padding: 0
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
                  marginTop: "30px",
                  fontFamily: "S-CoreDream-4Regular",
                  textAlign: "center",
                  fontSize: "7pt",
                  width: "100%",
                  padding: "0px"
                }}
              >
                <tbody>
                  <tr>
                    <th align="center" width="20%" style={{"borderBottom":"1px solid lightgray"}} >
                      <b>지하철</b><br /> 이용시
                    </th>
                    <td align="left" component="th">
                      <font style={{fontWeight:"bold"}} color="#FF8C00">3호선 신사역</font>에서 하차 후,
                      <font style={{fontWeight:"bold"}} color="#FF8C00">5번 출구</font>에서 도보 3분거리
                      <br />
                      <font style={{fontWeight:"bold"}} color="red">신분당선 신사역</font>에서 하차 후,
                      <font style={{fontWeight:"bold"}} color="red">5번 출구</font>에서 도보 3분거리
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <th align="center" component="th" width="20%" style={{"borderBottom":"1px solid lightgray"}} >
                      <b>버스</b><br />이용시
                    </th>
                    <td align="left" component="th" >
                      <tr>
                        <th style={{color:"royalblue"}} width="20%">간선</th>
                        <td className="ntd" style={{color:"royalblue"}} align="left" >142, 145, 148, 240, 441, 542</td>
                      </tr>
                      <tr>
                        <th width="20%" style={{color:"MediumSeaGreen"}}>지선</th>
                        <td className="ntd" style={{color:"MediumSeaGreen"}} align="left" >4212, 4412, 강남08, 서초03</td>
                      </tr>
                      <tr>
                        <th width="20%" style={{color:"red"}}>광역</th>
                        <td className="ntd" style={{color:"red"}} align="left" >1100, 3030, 8001, 9202, 9404</td>
                      </tr>
                    </td>

                  </tr>
                  <tr>
                    <th align="center" component="th" width="20%" style={{"borderBottom":"1px solid lightgray"}} >
                      <b>자가용</b><br /> 이용시
                    </th>
                    <td align="left" component="td" style={{"padding":"0px"}} >
                      <tr>
                        <th align="center"  style={{color:"SaddleBrown","paddingTop":"1px"}}>남산 3호 터널</th>
                      </tr>
                      <tr>
                        <td className="ntd" align="center"style={{"borderBottom":"1px solid lightgray"}} >
                          한남대교(남단) → 강남대로(신사역)방향 150m → 우회전시 호텔 진입
                        </td>
                      </tr>
                      <tr>
                        <th align="center"  style={{color:"SaddleBrown"}}>강남 고속버스터미널 방면</th>
                      </tr>
                      <tr>
                        <td className="ntd" align="center" style={{"borderBottom":"1px solid lightgray"}} >
                          잠원로 방향 → 압구정로 방향 → 신사역 방향 200m → 우회전시 호텔 진입
                        </td>
                      </tr>
                      <tr>
                        <th align="center"  style={{color:"SaddleBrown"}}>압구정 방면</th>
                      </tr>
                      <tr>
                        <td className="ntd" align="center" style={{"borderBottom":"1px solid lightgray"}}>
                          압구정 → 잠원로 방향에서 좌회전→ 신사역 방향 200m → 우회전시 호텔 진입
                        </td>
                      </tr>
                      <tr>
                        <th align="center"  style={{color:"SaddleBrown"}}>강변북로 방면</th>
                      </tr>
                      <tr>
                        <td className="ntd" align="center" style={{"padding":"0px"}}>
                          <tr>
                            <td style={{"borderBottom":"0px", "paddingBottom":"0px"}}>1. 강변북로 (구리 → 일산 방향)</td>
                          </tr>
                          <tr>
                            <td>한남오거리 유턴 → 한남대교(남단) → 강남대로(신사역)방향 150m → 우회전시 호텔 진입</td>
                          </tr>
                          <tr>
                            <td style={{"borderBottom":"0px", "paddingBottom":"0px"}}>2. 강변북로 (일산 → 구리 방향)</td>
                          </tr>
                          <tr>
                            <td>한남대교 방향(남단) → 강남대로(신사역)방향 150m → 우회전시 호텔 진입</td>
                          </tr>
                        </td>
                      </tr>
                      <tr>
                        <th align="center"  style={{color:"SaddleBrown"}}>올림픽대로 방면</th>
                      </tr>
                      <tr>
                        <td className="ntd" align="center"style={{"padding":"0px"}} >
                          <tr>
                            <td style={{"borderBottom":"0px", "paddingBottom":"0px"}}>1. 올림픽대로 (잠실 → 김포공항 방향)</td>
                          </tr>
                          <tr>
                            <td>강남대로 방향 → P턴 → 신사역 방향 150m → 우회전시 호텔 진입</td>
                          </tr>
                          <tr>
                            <td style={{"borderBottom":"0px", "paddingBottom":"0px"}}>2. 올림픽대로 (김포공항 → 잠실 방향)</td>
                          </tr>
                          <tr>
                            <td>한남대교(남단)방향 → P턴 → 신사역 방향 150m → 우회전시 호텔 진입</td>
                          </tr>

                        </td>
                      </tr>
                      <tr>
                        <th align="center"  style={{color:"SaddleBrown"}}>경부고속도로</th>
                      </tr>
                      <tr>
                        <td className="ntd" align="center" >
                          잠원IC에서 압구정로 방면 → P턴 → 잠원로 방면 → 신사역 방향 좌회전 200m → 우회전시 호텔진입

                        </td>
                      </tr>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div >
          </div >
        </div >
      </ThemeProvider >
    </div >
  );
}
