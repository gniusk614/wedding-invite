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



// function refreshMessages() {
//   const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

//   return Array.from(new Array(50)).map(
//     () => messageExamples[getRandomInt(messageExamples.length)],
//   );
// }





export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box ref={ref} >
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:100 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="사진보기" icon={<AiFillPicture size="23" />} />
          <BottomNavigationAction label="축의금" icon={<FaCommentsDollar size="23" />} />
          <BottomNavigationAction label="축하메시지" icon={<MdComment size="23" />} />
          <BottomNavigationAction label="식장 위치" icon={<BsPinMapFill size="23" />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
