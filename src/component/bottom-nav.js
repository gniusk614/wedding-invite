import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { FiPhone } from "react-icons/fi";
import { FaCommentsDollar } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { BsPinMapFill } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineLink } from "react-icons/ai";
import Icon from "../lib/img/share_icon.png";
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
        size="small"
        variant="extended"
          sx={{  margin: "5px 20px 5px 5px" }}
          id="kakaoLink"
          onClick={kakao}
          color="neutral"
        >
          <RiKakaoTalkFill size="20" />
          <font style={{fontFamily: "S-CoreDream-4Regular"}} size={1}>&nbsp;카톡공유</font>
        </Fab><br/>
        <CopyToClipboard
          text={"https://gniusk614.github.io/"}
          onCopy={() => alert("주소가 복사되었습니다")}
        >
          <Fab
           size="small"
          variant="extended"
            sx={{ margin: "5px 20px 5px 5px" }}
            icon={<AiOutlineLink size="30" />}
            color="gray"
            aria-label="edit"
          >
            <AiOutlineLink size="20" />
            <font style={{fontFamily: "S-CoreDream-4Regular"}} size={1}>&nbsp;링크복사</font>
          </Fab>
        </CopyToClipboard>
      </ThemeProvider>
    </div>
  );
}
