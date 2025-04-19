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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React, { useState } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, Select, MenuItem, InputLabel, FormControl
} from "@mui/material";
import { Typography, Collapse, Box } from "@mui/material";
import { Tabs, Tab } from "@mui/material";






function Requester() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [urgency, setUrgency] = useState("");
  const [department, setDepartment] = useState("");
  const [entity, setEntity] = useState("");
  const [textResponse, setTextResponse] = useState("");

  const handleSubmit = () => {
    // You can send this data to an API or log it
    console.log({ description, category, urgency,department,entity });
    alert("Issue Created!");
    handleClose(); // Close the dialog
  };

  const handleSubmitResponse = () => {
    // You can send this data to an API or log it
    console.log({ textResponse });
    
  };
  const urgencyOptions = ["Low", "Medium", "High", "Critical"];
  const entityOptions = ["Entity A", "Entity B", "Entity C", "Entity D"];
  const departmentOptions = ["Department A", "Department B", "Department C", "Department D"];

  const categoryOptions = [
    { label: "Hardware",  },
    { label: "Network", },
    { label: "Software", },
    { label: "Other", },
  ];

  const requestDetails = [
    {
      id: "1",
      status: "requested",
      issue_description: "Laptop not turning on after update.",
      entity: "Entity A",
      department: "IT Support",
      category: "Hardware",
      urgency: "High",
      created_date: "12-02-2025"
    },
    {
      id: "2",
      status: "in-progress",
      issue_description: "Unable to connect to VPN from home.",
      entity: "Entity B",
      department: "Infrastructure",
      category: "Network",
      urgency: "High",
      created_date: "13-02-2025"
    },
    {
      id: "3",
      status: "resolved",
      issue_description: "Software installation required for new project.",
      entity: "Entity C",
      department: "Development",
      category: "Software",
      urgency: "Normal",
      created_date: "14-02-2025"
    },
    {
      id: "4",
      status: "requested",
      issue_description: "Access request for shared drive.",
      entity: "Entity A",
      department: "Finance",
      category: "Access",
      urgency: "Low",
      created_date: "15-02-2025"
    },
    {
      id: "5",
      status: "in-progress",
      issue_description: "Printer not working in the finance department.",
      entity: "Entity B",
      department: "Finance",
      category: "Hardware",
      urgency: "Medium",
      created_date: "15-02-2025"
    },
    {
      id: "6",
      status: "requested",
      issue_description: "Slow internet connection in meeting rooms.",
      entity: "Entity D",
      department: "Operations",
      category: "Network",
      urgency: "High",
      created_date: "16-02-2025"
    },
    {
      id: "7",
      status: "resolved",
      issue_description: "Email access issue on mobile device.",
      entity: "Entity C",
      department: "HR",
      category: "Software",
      urgency: "Low",
      created_date: "16-02-2025"
    },
    {
      id: "8",
      status: "requested",
      issue_description: "Requesting setup of new user account.",
      entity: "Entity A",
      department: "Admin",
      category: "Access",
      urgency: "Medium",
      created_date: "17-02-2025"
    }
  ];

  const [expandedCard, setExpandedCard] = useState(null);
  const [expandedCardFilter, setExpandedCardFilter] = useState(null);

  
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "requested":
        return { backgroundColor: "#fdecea", color: "#f44336" }; // Light red bg, red text
      case "in-progress":
        return { backgroundColor: "#fff3e0", color: "#ff9800" }; // Light orange bg
      case "resolved":
        return { backgroundColor: "#e8f5e9", color: "#4caf50" }; // Light green bg
      default:
        return { backgroundColor: "#eeeeee", color: "#555" }; // Light gray
    }
  };

  const outcomeDetails=[{
    status_details:[
      {status:"requested", date:"14-02-2025"},
      {status:"assigned", date:"15-02-2025"},
      {status:"in-progress", date:"15-02-2025"},
      {status:"resolved", date:"15-02-2025"},
      
    ],
    assignee:"saman",
    ticket_details:[
      {ticket_description:"need this",user:"user a",user_det:"requester",date:"12-02-2025"},
      {ticket_description:"need this",user:"saman",user_det:"attendee",date:"12-02-2025"},
      {ticket_description:"need this",user:"user a",user_det:"requester",date:"12-02-2025"},
    ]
  }]

  const [selectedTab, setSelectedTab] = useState("all");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Filter requests based on tab
  const filteredRequests = selectedTab === "all"
    ? requestDetails
    : requestDetails.filter((m) => m.status === selectedTab);
  
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{ width: '100%' }}>
        

        <Card
          style={{
            marginBottom: "10px",
            padding: "10px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            

            <Box display="flex"  gap={1}>
              <MDButton color="primary" style={{ fontSize:'10px'}}variant="gradient" onClick={handleOpen}>Create</MDButton>

              <MDButton
                color="info"
                variant="gradient"
                style={{ fontSize:'10px'}}

                onClick={() =>
                  setExpandedCardFilter((prev) => (prev === "filter" ? null : "filter"))
                }
              >
                {expandedCardFilter === "filter" ? "Hide Filters" : "Filter Requests"}
              </MDButton>
            </Box>
          </Box>

          {/* Collapsible Section */}
          <Collapse
            in={expandedCardFilter === "filter"}
            timeout="auto"
            collapsedSize={0}
            unmountOnExit={false}
          >
            <Box mt={2} p={2} bgcolor="white" borderRadius={2} color="black">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={5}>
                  <TextField
                    fullWidth
                    type="date"
                    label="From"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField
                    fullWidth
                    type="date"
                    label="To"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button fullWidth variant="contained" color="success">
                    Filter
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </Card>

        <div style={{maxHeight:'2000px', overflowY:'auto'}}>

          <Box mb={2}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
              sx={{
                "& .MuiTab-root": {
                  textTransform: "capitalize",
                  borderRadius: "999px",
                  minHeight: "32px",
                  px: 2,
                  py: 0.5,
                  fontSize: "12px",
                  fontWeight: 600,
                  backgroundColor: "#f5f5f5",
                  marginRight: 1,
                },
                "& .Mui-selected": {
                  backgroundColor: "#1976d2",
                  color: "#fff !important",
                },
              }}
            >
              <Tab label="All" value="all" />
              <Tab label="In Progress" value="in-progress" />
              <Tab label="Resolved" value="resolved" />
            </Tabs>
          </Box>

          
          
          {filteredRequests.map((m) => (
            <Card
              key={m.id}
              
              style={{
                marginBottom: "10px",
                padding: "10px",               
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <Button
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onClick={() => {
                  setTextResponse("");
                  setExpandedCard((prev) => (prev === m.id ? null : m.id));
                }}
                
              >
              <Typography variant="subtitle1" style={{ fontSize: "14px" }}>
                Request #{m.id}  {expandedCard === m.id ? "Hide Details" : "View Details"}
              </Typography>



              

                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    ...getStatusStyles(m.status),
                  }}
                >
                  {m.status}
                  
                </div>

              </Button>


              
              <Collapse in={expandedCard === m.id} 
                timeout="auto"
                collapsedSize={0}
                unmountOnExit={false}
                >
                <Box mt={2} p={2} bgcolor="white" borderRadius={2} color="black">

                  {/* 🔁 Status Tracker */}
                  <Box mt={3}>
                    <Box position="relative" px={1} pb={4}>
                      <Box
                        position="absolute"
                        top="16px"
                        left={0}
                        right={0}
                        height="2px"
                        bgcolor="#ccc"
                        zIndex={0}
                      />
                      <Box display="flex" justifyContent="space-between" zIndex={1} position="relative">
                        {["requested","assigned", "in-progress", "resolved","reopened","on hold"].map((status, index) => {
                          const match = outcomeDetails[0].status_details.find(s => s.status === status);
                          const isActive = Boolean(match);
                          return (
                            <Box
                              key={status}
                              textAlign="center"
                              display="flex"
                              flexDirection="column"
                              alignItems="center"
                              flex={1}
                              sx={{ position: 'relative' }}
                            >
                              <Box
                                width={24}
                                height={24}
                                borderRadius="50%"
                                bgcolor={isActive ? "#00796b" : "#ccc"}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                color="#fff"
                                fontSize="12px"
                                zIndex={2}
                              >
                                {index + 1}
                              </Box>
                              <Typography
                                variant="caption"
                                style={{ marginTop: 4, textTransform: "capitalize", color: isActive ? "#00796b" : "#999" }}
                              >
                                {status}
                              </Typography>
                              <Typography variant="caption" style={{ fontSize: "10px", color: "#666" }}>
                                {match?.date || "—"}
                              </Typography>
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  </Box>

                  <Box mt={2}>
                    <Grid container spacing={3}>
                      {/* Request Summary */}
                      <Grid item xs={12} md={6}>
                        <Box
                          border="1px solid #ccc"
                          borderRadius={2}
                          bgcolor="#fefefe"
                          p={2}
                          height="100%"
                        >
                          <Typography variant="h6" gutterBottom>
                            Request Summary
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <Typography variant="body2">
                                <strong>Description:</strong> {m.issue_description}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body2">
                                <strong>Entity:</strong> {m.entity}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body2">
                                <strong>Department:</strong> {m.department}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body2">
                                <strong>Category:</strong> {m.category}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body2">
                                <strong>Urgency:</strong> {m.urgency}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body2">
                                <strong>Date:</strong> {m.created_date}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>

                      {/* Ticket Discussion */}
                      <Grid item xs={12} md={6}>
                        <Box
                          border="1px solid #ccc"
                          borderRadius={2}
                          bgcolor="#fefefe"
                          p={2}
                          height="100%"
                        >
                          <Typography variant="h6" gutterBottom>
                            Ticket Details
                          </Typography>
                          <Box display="flex" flexDirection="column" gap={1}>
                            {outcomeDetails[0].ticket_details.map((ticket, index) => (
                              <Box
                                key={index}
                                alignSelf={ticket.user_det === "requester" ? "flex-start" : "flex-end"}
                                bgcolor={ticket.user_det === "requester" ? "#f1f8e9" : "#e3f2fd"}
                                color="#333"
                                p={1.5}
                                borderRadius={3}
                                maxWidth="100%"
                                boxShadow={1}
                              >
                                <Typography variant="body2" fontWeight="bold">
                                  {ticket.user_det === "requester" ? "Requester" : "Attendee"}: {ticket.user}
                                </Typography>
                                <Typography variant="body2">{ticket.ticket_description}</Typography>
                                <Typography variant="caption" display="block" textAlign="right">
                                  {ticket.date}
                                </Typography>
                              </Box>
                            ))}

                            <TextField
                              label="Text Response"
                              margin="normal"
                              value={textResponse}
                              multiline
                              rows={4}
                              onChange={(e) => setTextResponse(e.target.value)}
                            />

                            <MDButton
                              color="dark"
                              sx={{ mb: 1, fontSize: '10px' }}
                              variant="gradient"
                              onClick={handleSubmitResponse}
                            >
                              Submit
                            </MDButton>

                            {selectedTab=="resolved" &&
                                <MDButton
                                color="dark"
                                sx={{ mb: 1, fontSize: '10px' }}
                                variant="gradient"
                                onClick={handleSubmitResponse}
                              >
                                Reopen
                              </MDButton>
                            }
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>


                  
                </Box>

              </Collapse>

            </Card>
          ))}
          
        </div>

      </div>

      {/* Popup Dialog for a request*/}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Create a New Helpdesk Ticket</DialogTitle>
        <DialogContent dividers>

          <FormControl fullWidth margin="normal">
            <InputLabel>Entity</InputLabel>
            <Select
              value={entity}
              onChange={(e) => setEntity(e.target.value)}
              label="Entity"
              style={{height:'50px'}}
            >
              {entityOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Department</InputLabel>
            <Select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              label="Department"
              style={{height:'50px'}}
            >
              {departmentOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>


          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
              style={{height:'50px'}}
            >
              {categoryOptions.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {option.label}
                  </div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <TextField
            label="Issue Description"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          

          <FormControl fullWidth margin="normal">
            <InputLabel>Urgency</InputLabel>
            <Select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              label="Urgency"
              style={{height:'50px'}}
            >
              {urgencyOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <MDButton color="primary" style={{marginBottom:'10px', fontSize:'10px'}}variant="gradient" onClick={handleSubmit}>Submit</MDButton>
          
        </DialogActions>
      </Dialog>

      
    </DashboardLayout>
  );
}

export default Requester;
