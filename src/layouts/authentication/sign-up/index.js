import { useState } from "react";
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { toast } from "react-toastify";
import APIService from "services/APIService";

function Cover() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });

    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.agreeTerms) {
        toast.error("You must agree to the terms and conditions.",{
          position: "top-right",
          theme: "colored", 
          style:{fontSize:'12px'} 
        })
       
        return;
      }
      
      let reqBody=JSON.stringify(formData);
      const data = await APIService.post('/users/addUser',reqBody);
      if (data.status==201){
          toast.success("Successful creation of data!",{
            position: "top-right",
            theme: "colored", 
            style:{fontSize:'12px'} 
          })
      }

      

    } catch (error) {
      console.error('Error during signup:', error);
      
    }
  };

  return (
    <div style={{ marginTop: '45px' }}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="dark"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your username, email and password to register
          </MDTypography>
        </MDBox>

        <MDBox pt={3} pb={3} px={3}>
          <form onSubmit={handleSubmit}>
            <MDBox mb={2}>
              <MDInput 
                type="text" 
                label="Username" 
                fullWidth 
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
                type="email" 
                label="Email" 
                fullWidth 
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
                type="password" 
                label="Password" 
                fullWidth 
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: 1 }}
              >
                I agree to the{" "}
                <Link to="/authentication/terms-agreements" style={{ color: '#1a73e8' }}>
                  Terms and Conditions
                </Link>
              </MDTypography>
            </MDBox>
            <MDBox mt={3} mb={1}>
              <MDButton variant="gradient" color="dark" fullWidth type="submit">
                Sign Up
              </MDButton>
            </MDBox>
          </form>
        </MDBox>

      </Card>
    </div>
  );
}

export default Cover;

