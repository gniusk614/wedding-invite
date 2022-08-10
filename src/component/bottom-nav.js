import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { FiPhone } from "react-icons/fi";
import { FaCommentsDollar } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { BsPinMapFill } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiOutlineLink } from "react-icons/ai";
import Icon from "../lib/img/share_icon.png";



// function refreshMessages() {
//   const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

//   return Array.from(new Array(50)).map(
//     () => messageExamples[getRandomInt(messageExamples.length)],
//   );
// }





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

  const copyHandler = async (i) => {
    await navigator.clipboard.writeText("https://gniusk614.github.io/")
    .then(function(){
      alert("주소를 복사했습니다.")
    });
  }
  

  return (
    <Box ref={ref} >
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:100 }} elevation={3}>
        <BottomNavigation>
          <BottomNavigationAction showLabel="카톡공유" id="kakaoLink" onClick={kakao} label="카톡공유" icon={<RiKakaoTalkFill size="30"/>} />
          <BottomNavigationAction showLabel="링크복사" label="링크복사" onClick={copyHandler} icon={<AiOutlineLink size="30" />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
