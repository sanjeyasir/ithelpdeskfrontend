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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

import React, { useState, useEffect} from 'react';
import Chart from 'react-apexcharts';
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import MDProgress from "components/MDProgress";
import MDButton from "components/MDButton";



function Reports() {

  // Sample data with varying dates
const numberOfIssues = [
  { issuesRequested: "2", issueResolved: "4", date: "2025-03-01" },
  { issuesRequested: "5", issueResolved: "3", date: "2025-03-01" },
  { issuesRequested: "4", issueResolved: "2", date: "2025-03-02" },
  { issuesRequested: "6", issueResolved: "6", date: "2025-03-02" },
  { issuesRequested: "3", issueResolved: "2", date: "2025-03-03" },
  { issuesRequested: "8", issueResolved: "8", date: "2025-03-03" },
  { issuesRequested: "5", issueResolved: "3", date: "2025-01-01" },
  { issuesRequested: "5", issueResolved: "3", date: "2025-02-01" },
  { issuesRequested: "5", issueResolved: "3", date: "2025-04-01" },
  { issuesRequested: "5", issueResolved: "3", date: "2024-03-01" },
  { issuesRequested: "5", issueResolved: "3", date: "2024-05-01" },
];

const userWiseRequests = [
  { issuesAssigned: "2", issuesResolved: "3", assignee: "A", date: "2025-03-01" },
  { issuesAssigned: "4", issuesResolved: "5", assignee: "A", date: "2025-03-01" },
  { issuesAssigned: "8", issuesResolved: "7", assignee: "A", date: "2025-03-02" },
  { issuesAssigned: "5", issuesResolved: "4", assignee: "B", date: "2025-03-01" },
  { issuesAssigned: "6", issuesResolved: "5", assignee: "B", date: "2025-03-02" },
  { issuesAssigned: "2", issuesResolved: "2", assignee: "B", date: "2025-03-02" },
  { issuesAssigned: "3", issuesResolved: "3", assignee: "C", date: "2025-03-01" },
  { issuesAssigned: "7", issuesResolved: "6", assignee: "C", date: "2025-03-03" },
  { issuesAssigned: "6", issuesResolved: "5", assignee: "B", date: "2023-03-02" },
  { issuesAssigned: "2", issuesResolved: "2", assignee: "B", date: "2024-03-02" },
  { issuesAssigned: "3", issuesResolved: "3", assignee: "C", date: "2025-02-01" },
  { issuesAssigned: "7", issuesResolved: "6", assignee: "C", date: "2025-01-03" }
];


  
  const categoryRequests = [
    { category: "Hardware", issues: "2", date: "2025-03-01" },
    { category: "Software", issues: "5", date: "2025-03-05" },
    { category: "Networking", issues: "3", date: "2025-03-12" },
    { category: "Hardware", issues: "7", date: "2025-03-07" },
    { category: "Software", issues: "4", date: "2025-03-15" },
    { category: "Security", issues: "6", date: "2025-03-25" },
    { category: "Networking", issues: "2", date: "2025-03-18" },
    { category: "Hardware", issues: "5", date: "2025-03-21" },
    { category: "Security", issues: "8", date: "2025-03-20" },
    { category: "Software", issues: "6", date: "2025-03-10" },
    { category: "Hardware", issues: "3", date: "2025-01-15" },
    { category: "Software", issues: "4", date: "2025-01-20" },
    { category: "Security", issues: "7", date: "2025-02-05" },
    { category: "Networking", issues: "5", date: "2025-04-10" },
    { category: "Hardware", issues: "9", date: "2025-04-15" },
    { category: "IoT", issues: "6", date: "2024-12-25" },
    { category: "AI", issues: "8", date: "2024-11-19" },
    { category: "Security", issues: "5", date: "2023-06-10" },
    { category: "Networking", issues: "4", date: "2023-06-18" },
    { category: "AI", issues: "3", date: "2023-07-22" },
  ];
  

  const departmentRequests = [
    { department: "Department A", issues: "2", date: "2025-03-01" },
    { department: "Department B", issues: "12", date: "2025-03-05" },
    { department: "Department A", issues: "10", date: "2025-03-12" },
    { department: "Department C", issues: "5", date: "2025-03-07" },
    { department: "Department A", issues: "8", date: "2025-03-15" },
    { department: "Department B", issues: "15", date: "2025-03-18" },
    { department: "Department C", issues: "7", date: "2025-03-21" },
    { department: "Department B", issues: "3", date: "2025-03-10" },
    { department: "Department A", issues: "6", date: "2025-03-20" },
    { department: "Department C", issues: "9", date: "2025-03-25" },
    { department: "Department D", issues: "5", date: "2025-01-10" },
    { department: "Department E", issues: "7", date: "2025-01-22" },
    { department: "Department A", issues: "6", date: "2025-02-14" },
    { department: "Department B", issues: "11", date: "2025-04-01" },
    { department: "Department C", issues: "4", date: "2025-04-18" },
    { department: "Department D", issues: "6", date: "2024-12-30" },
    { department: "Department E", issues: "10", date: "2024-11-10" },
    { department: "Department A", issues: "3", date: "2023-06-03" },
    { department: "Department B", issues: "9", date: "2023-07-19" },
    { department: "Department F", issues: "2", date: "2023-08-20" },
  ];
  
  const [filterType, setFilterType] = useState("month"); // "day", "month", "year"
  const [filteredCategoryRequests, setFilteredCategoryRequests] = useState(categoryRequests);
  const [filteredDepartmentRequests, setFilteredDepartmentRequests] = useState(departmentRequests);
  const [filteredNumberofIssues, setFilteredNumberofIssues] = useState(numberOfIssues);
  const [filteredUserWiseRequests, setFilteredUserWiseRequests] = useState(userWiseRequests);

  const currentYear = new Date().getFullYear();
  const months = [
    { name: "January", value: "01" },
    { name: "February", value: "02" },
    { name: "March", value: "03" },
    { name: "April", value: "04" },
    { name: "May", value: "05" },
    { name: "June", value: "06" },
    { name: "July", value: "07" },
    { name: "August", value: "08" },
    { name: "September", value: "09" },
    { name: "October", value: "10" },
    { name: "November", value: "11" },
    { name: "December", value: "12" },
  ];

  const years = ["2024", "2025", "2026"];

  const filterRequests = (requests, type, value = null) => {
    const today = new Date();
    return requests.filter((request) => {
      const reqDate = new Date(request.date);
      const reqDay = reqDate.getDate();
      const reqMonth = (reqDate.getMonth() + 1).toString().padStart(2, "0");
      const reqYear = reqDate.getFullYear().toString();

      if (type === "day") {
        return reqDate.toDateString() === today.toDateString();
      }
      if (type === "month") {
        return reqMonth === value && reqYear === currentYear.toString();
      }
      if (type === "year") {
        return reqYear === value;
      }
      return true;
    });
  };

  const applyFilter = (type, value = null) => {
    setFilterType(type);
    setFilteredCategoryRequests(filterRequests(categoryRequests, type, value));
    setFilteredDepartmentRequests(filterRequests(departmentRequests, type, value));
    setFilteredNumberofIssues(filterRequests(numberOfIssues, type, value));
    setFilteredUserWiseRequests(filterRequests(userWiseRequests, type, value));
  };

  const preparePieData = (data, field) => {
    const aggregated = data.reduce((acc, curr) => {
      const key = curr[field];
      acc[key] = (acc[key] || 0) + parseInt(curr.issues);
      return acc;
    }, {});
    return { labels: Object.keys(aggregated), values: Object.values(aggregated) };
  };

  const categoryData = preparePieData(filteredCategoryRequests, "category");
  const deptData = preparePieData(filteredDepartmentRequests, "department");

   // Prepare data for Chart 1
   const dates = filteredNumberofIssues.map((item) => item.date);
   const issuesRequested = filteredNumberofIssues.map((item) =>
     parseInt(item.issuesRequested)
   );
   const issuesResolved = filteredNumberofIssues.map((item) =>
     parseInt(item.issueResolved)
   );
 
   const chart1Options = {
     chart: {
       id: "line-1",
       toolbar: { show: false },
     },
     xaxis: {
       categories: dates,
     },
     
   };
 
   const chart1Series = [
     {
       name: "Issues Requested",
       data: issuesRequested,
     },
     {
       name: "Issues Resolved",
       data: issuesResolved,
     },
   ];
 
   // Aggregate user-wise data for Chart 2
   const assigneeMap = {};
   filteredUserWiseRequests.forEach((item) => {
     if (!assigneeMap[item.assignee]) {
       assigneeMap[item.assignee] = { assigned: 0, resolved: 0 };
     }
     assigneeMap[item.assignee].assigned += parseInt(item.issuesAssigned);
     assigneeMap[item.assignee].resolved += parseInt(item.issuesResolved);
   });
 
   const assignees = Object.keys(assigneeMap);
   const assigned = assignees.map((key) => assigneeMap[key].assigned);
   const resolved = assignees.map((key) => assigneeMap[key].resolved);
 
   const chart2Options = {
    chart: {
      id: "horizontal-bar",
      toolbar: { show: false },
    },
    xaxis: {
      categories: assignees,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };
  
 
   const chart2Series = [
     {
       name: "Issues Assigned",
       data: assigned,
     },
     {
       name: "Issues Resolved",
       data: resolved,
     },
   ];

   const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    fontWeight: "500",
  };

  const selectStyle = {
    padding: "6px 10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    minWidth: "140px",
  };

  let leadtime=10;
  let nIssues=10;
  let nResolved=10;

  const responsiveCard = {
    flex: "1 1 300px",
    minWidth: "250px",
    display: "flex",
    flexDirection: "column",
  };

  const chartCardStyle = {
    flex: "1 1 400px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
  };
  
  let dataObtained=[
    {name:"sanjey", department:"dept A",ticket_id:"sth"}
  ]

  let columns= [
    { Header: "requester", accessor: "requester", width: "10%", align: "left" },
    { Header: "ticketid", accessor: "ticketid", width: "10%", align: "left" },
    { Header: "ticketdetail", accessor: "ticketdetail", align: "center" },
    { Header: "priority", accessor: "priority", align: "center" },
    { Header: "assignee", accessor: "assignee", align: "center" },
    { Header: "action", accessor: "action", align: "center" },
  ];

  let rows= [
    {
      requester: "sth",ticketid:"sth",ticketdetail:"sth",priority:'sth',assignee:'sth',
      action: (
        <MDButton>
          sth   
        </MDButton>
      ),
    },
    {
      requester: "sth",ticketid:"sth",ticketdetail:"sth",priority:'sth',assignee:'sth',
      action: (
        <MDButton>
          sth   
        </MDButton>
      ),
    },
    {
      requester: "sth",ticketid:"sth",ticketdetail:"sth",priority:'sth',assignee:'sth',
      action: (
        <MDButton>
          sth   
        </MDButton>
      ),
    },
    {
      requester: "sth",ticketid:"sth",ticketdetail:"sth",priority:'sth',assignee:'sth',
      action: (
        <MDButton>
          sth   
        </MDButton>
      ),
    },
    {
      requester: "sth",ticketid:"sth",ticketdetail:"sth",priority:'sth',assignee:'sth',
      action: (
        <MDButton>
          sth   
        </MDButton>
      ),
    }
  ]

  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{ padding: "20px" }}>
      {/* Filter Buttons */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <button onClick={() => applyFilter("day")} style={buttonStyle}>
          Today
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={() => setFilterType("month")} style={buttonStyle}>
            Month
          </button>
          {filterType === "month" && (
            <select
              onChange={(e) => applyFilter("month", e.target.value)}
              style={selectStyle}
            >
              <option value="">Select Month</option>
              {months.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.name}
                </option>
              ))}
            </select>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={() => setFilterType("year")} style={buttonStyle}>
            Year
          </button>
          {filterType === "year" && (
            <select
              onChange={(e) => applyFilter("year", e.target.value)}
              style={selectStyle}
            >
              <option value="">Select Year</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
      {/* Left Column */}
      <div
        style={{
          flex: "1 1 70%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          minWidth: "300px",
        }}
      >
        {/* Statistics Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div style={{ flex: "1 1 300px" }}>
            <ComplexStatisticsCard
                color="dark"
                icon="leaderboard"
                title="Number of tickets"
                count={nIssues}
            
              />
            
          </div>
          <div style={{ flex: "1 1 300px" }}>
             <ComplexStatisticsCard
                color="success"
                icon="check_circle"
                title="Number of resolved"
                count={nResolved}
            
              />
            
          </div>
          <div style={{ flex: "1 1 300px" }}>
              <ComplexStatisticsCard
                color="primary"
                icon="access_time"
                title="Leadtime (days)"
                count={leadtime}
            
              />
            
          </div>
        </div>

        {/* Bar Charts */}
        <div
          style={{
            display: "flex",
            flexDirection:'row',
            gap: "20px",
            width:'100%'
          }}
        >
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              width:'50%',
              display:'flex',
              flexDirection:'column'
            }}
          >
            <MDTypography variant="button" fontWeight="light" color="text">
            Tickets Requested vs Resolved Over Time

            </MDTypography>
            <Chart
              options={chart1Options}
              series={chart1Series}
              type="bar"
              height={250}
            />
          </div>
          <div
            style={{
              flex: "1 1 300px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              width:'50%',
              flexDirection:'column',
              display:'flex'
            }}
          >
             <MDTypography variant="button" fontWeight="light" color="text">
            IT Admin wise Assigned vs Resolved Tickets

            </MDTypography>
            <Chart
              options={chart2Options}
              series={chart2Series}
              type="bar"
              height={250}
            />
          </div>
        </div>

        {/* Data grid */}
        <div style={{maxHeight:"100px", overflowY:'auto'}}>
           <DataTable
                    table={{ columns, rows }}
                    showTotalEntries={false}
                    isSorted={false}
                    noEndBorder
                    entriesPerPage={false}
          />

        </div>
      </div>

      {/* Right Column (Pie Charts) */}
      <div
        style={{
          flex: "1 1 28%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          minWidth: "250px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
           <MDTypography variant="button" fontWeight="light" color="text">
            Category wise segregation

            </MDTypography>
          <Chart
            options={{ chart: { type: "pie" }, labels: categoryData.labels }}
            series={categoryData.values}
            type="pie"
            height={250}
          />
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
           <MDTypography variant="button" fontWeight="light" color="text">
            Department wise segregation

            </MDTypography>
          <Chart
            options={{ chart: { type: "pie" }, labels: deptData.labels }}
            series={deptData.values}
            type="pie"
            height={250}
          />
        </div>
      </div>
      </div>

      

      

     

     
    </div>
      
    </DashboardLayout>
  );
}

export default Reports;