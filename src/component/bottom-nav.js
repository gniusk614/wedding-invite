import * as React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineLink } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Fab } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles/";
import { createTheme } from "@mui/material/styles/";

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

export default function FixedBottomNavigation() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const kakao = () => {
    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    window.Kakao.init("e5c5f0051a5b0fec7039bca859ca2c29");
    // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
    window.Kakao.Link.createCustomButton({
      container: "#kakaoLink",
      templateId: 81085,
    });
  };

  return (
    <div
      style={{ position: "fixed", bottom: 20,  right: 0, zIndex: 100 }}
      elevation={3}
    >
      <ThemeProvider theme={theme}>
        <Fab
        variant="extended"
          sx={{  margin: "5px 20px 5px 5px" }}
          id="kakaoLink"
          onClick={kakao}
          color="neutral"
        >
          <RiKakaoTalkFill size="30" />
          <font style={{fontFamily: "S-CoreDream-4Regular"}} size={2}>&nbsp;카톡공유</font>
        </Fab><br/>
        <CopyToClipboard
          text={"https://gniusk614.github.io/"}
          onCopy={() => alert("주소가 복사되었습니다")}
        >
          <Fab
          variant="extended"
            sx={{ margin: "5px 20px 5px 5px" }}
            color="gray"
            aria-label="edit"
          >
            <AiOutlineLink size="30" />
            <font style={{fontFamily: "S-CoreDream-4Regular"}} size={2}>&nbsp;링크복사</font>
          </Fab>
        </CopyToClipboard>
      </ThemeProvider>
    </div>
  );
}
