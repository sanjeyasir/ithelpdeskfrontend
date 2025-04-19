/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

import img from "../../../assets/images/ithelpdesk.png";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";
import MDTypography from "components/MDTypography";

import { Report, AdminPanelSettings, Settings, ExitToApp } from '@mui/icons-material';

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });


  const navigate = useNavigate();

  const handleMaster = () => {
    // Add your sign-in logic here (optional validation, API calls, etc.)
    navigate("/master");
  };

  const handleLogout = () => {
    // Add your sign-in logic here (optional validation, API calls, etc.)
    navigate("/authentication/sign-in");
  };

  const handleAdmin = () => {
    // Add your sign-in logic here (optional validation, API calls, etc.)
    navigate("/admin");
  };

  const handleReports = () => {
    // Add your sign-in logic here (optional validation, API calls, etc.)
    navigate("/reports");
  };

  const handleRequester = () => {
    // Add your sign-in logic here (optional validation, API calls, etc.)
    navigate("/requester");
  };


  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)} style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: 'row',
            overflowY:'auto',
            width:'100%' 
          }}>
  
        <img src={img} style={{width:'70px', height:'70px'}}></img>

        {/* Right side: buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <MDTypography
            variant="h5"
            style={{
              fontSize: "14px",
              backgroundColor: "#3f51b5",
              color: "white",
              padding: "10px 20px",
              margin: "0 10px",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "center",
              transition: "transform 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
            onClick={handleReports}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Report />
            Reports
          </MDTypography>

          <MDTypography
            variant="h5"
            style={{
              fontSize: "14px",
              backgroundColor: "#4caf50",
              color: "white",
              padding: "10px 20px",
              margin: "0 10px",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "center",
              transition: "transform 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
            onClick={handleAdmin}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <AdminPanelSettings />
            Admin
          </MDTypography>

          <MDTypography
            variant="h5"
            style={{
              fontSize: "14px",
              backgroundColor: "#ff9800",
              color: "white",
              padding: "10px 20px",
              margin: "0 10px",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "center",
              transition: "transform 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
            onClick={handleMaster}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Settings />
            Master
          </MDTypography>

          <MDTypography
            variant="h5"
            style={{
              fontSize: "14px",
              backgroundColor: "white",
              color: "#333",
              padding: "10px 20px",
              margin: "0 10px",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "center",
              transition: "transform 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
            onClick={handleLogout}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <ExitToApp />
            Logout
          </MDTypography>
        </div>
      
      

       
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
