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
  return (
    <div style={{ marginTop: "45px" }}>
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
            Terms and Conditions
          </MDTypography>
        </MDBox>

        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
          <h1>📄 HealthDesk Terms and Conditions</h1>
          <p><strong>Last updated:</strong> [Insert Date]</p>

          <p>Welcome to <strong>HealthDesk</strong>!</p>
          <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using our website and services.</p>
          <p>By accessing or using HealthDesk, you agree to be bound by these Terms. If you disagree with any part, you may not access the service.</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By using HealthDesk’s platform, you confirm that you are at least 18 years old, or accessing the platform under the supervision of a parent or legal guardian.</p>
          <p>Your continued use of HealthDesk constitutes acceptance of any updates to these Terms.</p>

          <h2>2. Services Provided</h2>
          <p>HealthDesk offers digital solutions to facilitate healthcare service management, appointment bookings, patient support, and other related services.</p>
          <p><strong>Note:</strong> HealthDesk does <u>not</u> provide medical advice. Always consult a qualified health professional for diagnosis or treatment.</p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>You must provide accurate and complete registration information.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You agree to use HealthDesk only for lawful purposes and in compliance with all applicable laws and regulations.</li>
          </ul>

          <h2>4. Privacy Policy</h2>
          <p>Your use of HealthDesk is subject to our Privacy Policy, which explains how we collect, use, and protect your personal data.</p>
          <p><a href="#">[Insert Link to Privacy Policy]</a></p>

          <h2>5. Intellectual Property</h2>
          <p>All content on HealthDesk — including logos, graphics, software, and text — is the property of HealthDesk or its licensors and protected by applicable copyright laws.</p>
          <p>You may not reproduce, distribute, modify, or create derivative works without express permission.</p>

          <h2>6. Limitation of Liability</h2>
          <p>HealthDesk provides its services on an "as-is" and "as-available" basis.</p>
          <p>We do not guarantee:</p>
          <ul>
            <li>That the platform will be error-free or uninterrupted.</li>
            <li>That any information provided is accurate, complete, or useful for medical purposes.</li>
          </ul>
          <p>HealthDesk shall not be liable for any direct, indirect, incidental, consequential, or punitive damages resulting from your use of the platform.</p>

          <h2>7. Account Termination</h2>
          <p>We reserve the right to suspend or terminate your account if you violate these Terms or if we suspect any unlawful or unauthorized activity.</p>

          <h2>8. Changes to Terms</h2>
          <p>HealthDesk may modify these Terms from time to time.</p>
          <p>We will notify users of significant changes by posting an updated version and updating the “Last updated” date.</p>

          <h2>9. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of [Insert Country/Region].</p>
          <p>Any disputes arising from these Terms shall be resolved in the courts of [Insert Jurisdiction].</p>

          <h2>10. Contact Us</h2>
          <p>
            📧 <strong>Email:</strong> support@healthdesk.com<br />
            📞 <strong>Phone:</strong> [Insert Phone Number]
          </p>
        </div>
      </Card>
    </div>
  );
}

export default Cover;
