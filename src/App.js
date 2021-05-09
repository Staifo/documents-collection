import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import Arbeitszeugnis from "./Arbeitszeugnis";
import Toga from "./Toga";
import Bachelor from "./Bachelor";
import CertificateIV from "./CertificateIV";
import CertificateWBS from "./CertificateWBS";

const App = () => {
  const [certificateIV, setCertificateIV] = useState(null)
  const [certificateWBS, setCertificateWBS] = useState(null)
  const [bachelor, setBachelor] = useState(null)
  const [toga, setToga] = useState(null)
  const [arbeitszeugnis, setArbeitszeugnis] = useState(null)

  const handle1 = (e) => {
    // setCertificateIV(e.target)
    setCertificateWBS(!certificateWBS)
    setCertificateIV(null)
    setBachelor(null)
    setToga(null)
    setArbeitszeugnis(null)
  }

  const handle2 = (e) => {
    // setCertificateIV(e.target)
    setCertificateIV(!certificateIV)
    setCertificateWBS(null)
    setBachelor(null)
    setToga(null)
    setArbeitszeugnis(null)
  }

  const handle3 = (e) => {
    // setCertificateIV(e.target)
    setBachelor(!bachelor)
    setCertificateWBS(null)
    setCertificateIV(null)
    setToga(null)
    setArbeitszeugnis(null)
  }

  const handle4 = (e) => {
    // setCertificateIV(e.target)
    setToga(!toga)
    setCertificateWBS(null)
    setCertificateIV(null)
    setBachelor(null)
    setArbeitszeugnis(null)
  }

  const handle5 = (e) => {
    // setCertificateIV(e.target)
    setArbeitszeugnis(!arbeitszeugnis)
    setCertificateWBS(null)
    setCertificateIV(null)
    setBachelor(null)
    setToga(null)
  }



  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "max-content",
          margin:'40px',
        }}
      >
        <div
          className='buttons'
          style={{
            width: "max-content",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
            margin:'40px',
          }}
        >
        <div className='innerButton' onClick={handle1}>Coding Certificate</div>
         <div onClick={handle2}>CertificateIV</div>
          <div onClick={handle3}>Bachelor Certificate</div>
          <div onClick={handle4}>Toga Letter of Recommendation</div>
          <div onClick={handle5}>Jet Services Letter of Recommendation</div>
        </div>
        </div>
      {certificateIV && <CertificateIV/>}
      {certificateWBS && <CertificateWBS/> }
      {bachelor && <Bachelor /> }
      {toga && <Toga />}
      {arbeitszeugnis && <Arbeitszeugnis />}
    </div>
    
  );
};

export default App;

// const StyledMenu = withStyles({
//   paper: {
//     border: '1px solid #d3d4d5',
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'center',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'center',
//     }}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     '&:focus': {
//       backgroundColor: theme.palette.primary.main,
//       '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

// export default function CustomizedMenus() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         aria-controls="customized-menu"
//         aria-haspopup="true"
//         variant="contained"
//         color="primary"
//         onClick={handleClick}
//       >
//         Open Menu
//       </Button>
//       <StyledMenu
//         id="customized-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <StyledMenuItem>
//           <ListItemText primary="Sent mail" />
//         </StyledMenuItem>
//         <StyledMenuItem>
//           <ListItemText primary="Drafts" />
//         </StyledMenuItem>
//         <StyledMenuItem>
//           <ListItemText primary="Inbox" />
//         </StyledMenuItem>
//         <StyledMenuItem>
//           <ListItemText primary="Inbox" />
//         </StyledMenuItem>
//       </StyledMenu>
//     </div>
//   );
// }
