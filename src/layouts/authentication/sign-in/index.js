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

import { useState } from "react";

// react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/helpdesk.png";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const navigate = useNavigate();

  const handleSignIn = () => {
    // Add your sign-in logic here (optional validation, API calls, etc.)
    navigate("/requester");
  };

  

  return (
    <BasicLayout image={bgImage}>
    <Card
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
      <MDBox
        variant="gradient"
        bgColor="dark"
        borderRadius="lg"
        coloredShadow="dark"
        mx={2}
        mt={-3}
        p={3}
        textAlign="center"
      >
        <MDTypography
          variant="h4"
          fontWeight="bold"
          color="white"
          mt={1}
          letterSpacing={1}
        >
          IT Help Desk
        </MDTypography>
        <MDTypography variant="button" color="white" opacity={0.8}>
          Welcome back! Please login to continue.
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3} px={4}>
        <MDBox component="form" role="form">
          <MDBox mb={3}>
            <MDInput
              type="email"
              label="Email"
              variant="standard"
              fullWidth
              sx={{
                input: { color: "#fff" },
                label: { color: "#ccc" },
              }}
            />
          </MDBox>
          <MDBox mb={3}>
            <MDInput
              type="password"
              label="Password"
              variant="standard"
              fullWidth
              sx={{
                input: { color: "#fff" },
                label: { color: "#ccc" },
              }}
            />
          </MDBox>
          <MDBox mt={4} mb={1}>
            <MDButton
              onClick={handleSignIn}
              variant="gradient"
              color="dark"
              fullWidth
              sx={{
                py: 1.5,
                fontWeight: "bold",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Sign In
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
    </BasicLayout>
  );
}

export default Basic;
