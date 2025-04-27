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
import HandsOnGrid from "layouts/globalcomponents/componenthandson";
import React, { useRef, useState, useEffect } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import APIService from "services/APIService";
import { toast } from 'react-toastify';

// ... [All other imports remain the same]
function Master() {

  let userId=1;
  const [selectedTab, setSelectedTab] = useState("gencode");

  const [gridRows, setGridRows] = useState({
    gencode: [],
    userrolecreation: [],
    categorymapping: [["Electronics", "Tech"], ["Clothing", "Apparel"]],
  });

  const gridData = {
    gencode: {
      columnHeaders: ["id","category","code", "description"],
      columnConfig: [
        { data: 0, type: "text" },
        { data: 1, type: "text" },
        { data: 2, type: "text" },
        { data: 3, type: "text" },
      ],
    },
    userrolecreation: {
      columnHeaders: ["id", "username", "email", "active","role"],
      columnConfig: [
        { data: 0, type: "text" },
        { data: 1, type: "text" },
        { data: 2, type: "text" },
        { data: 3, type: "checkbox" },
        {
          data: 4,
          type: "dropdown",
          source: ["Admin", "Requester"],
        },
      ],
    },
    categorymapping: {
      columnHeaders: ["Category", "Mapped To"],
      columnConfig: [
        { data: 0, type: "text" },
        { data: 1, type: "text" },
      ],
    },
  };

  const handleTabChange = (event, newValue) => setSelectedTab(newValue);

  const handleSubmit = (e, tab) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    console.log(`Submitted data for tab: ${tab}`, values);
  };

  const handleAddRow = () => {
    const columnLength = gridData[selectedTab].columnConfig.length;
    const newRow = new Array(columnLength).fill("");
    setGridRows((prev) => ({
      ...prev,
      [selectedTab]: [...prev[selectedTab], newRow],
    }));
  };

  const buttonConfig = [
    { label: "Edit", action: (row, rowData) => handleSubmitEdit(rowData) },
    { label: "Delete", action: (row, rowData) => handleSubmitDelete(rowData) },
  ];

  const { columnHeaders, columnConfig } = gridData[selectedTab];
  const rowData = gridRows[selectedTab];

  const handsOnRef = useRef();

  const handleFetchGridData = () => {
    const gridData = handsOnRef.current.getGridData();
    console.log("Current Grid Data:", gridData);
    // You can use this data however you like!
  };

  //============================code to setup the gencode master data creation=============

  const [categories, setCategories] = useState([]); // State to store categories
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const fetchCategories = async () => {
    try {
      const data = await APIService.get('/masterdata/getCategories'); // Replace with your actual endpoint

      console.log("=>",data);

      if(data.length==0){
        setCategories([
          {id:1,
          code:"GENCODE"}
        ])
        toast.error("No categories in database!", { position: "top-right",
          theme: "colored", 
          style:{fontSize:'12px'}
        } );
      }
      let categoriesData = data.map(m => ({
        id: m.id,
        code: m.code
      }));   
      categoriesData.unshift({ id: 0, code: 'GENCODE' });
      setCategories(categoriesData); // Assuming the API returns an array of categories
      
    } catch (error) {
      toast.error(`Something went wrong:${error}!`,{
        position: "top-right",
        theme: "colored", 
        style:{fontSize:'12px'} 
      })
      console.error("Error fetching categories:", error);
    }
  };

  const fetchGenCodeMasterData = async () => {
    try {
      const data = await APIService.get('/masterdata/getMasterData'); // Replace with your actual endpoint

      console.log("=>",data);

      if(data.length!=0){

        let masterData = data.map(m => [
          m.id,
          m.category,
          m.code,
          m.description
        ]);
        

        setGridRows((prev) => ({
          ...prev,
          gencode: masterData,
        }));
        
       
        toast.success("Retrieved all master data from database!", {
          position: "top-right",
          theme: "colored", 
          style:{fontSize:'12px'} 
        });
        

      }else{
        setGridRows((prev) => ({
          ...prev,
          gencode:[],
        }));

        throw new Error("No data!")
      }
      
      
    } catch (error) {
      toast.error(`Something went wrong retrieving master data:${error}!`,{
        position: "top-right",
        theme: "colored", 
        style:{fontSize:'12px'} 
      })
      console.error("Error fetching master data:", error);
    }
  };

  const fetchUserMasterData = async () => {
    try {
      const data = await APIService.get('/users/getUsers'); // Replace with your actual endpoint

      console.log("=>",data);

      if(data.length!=0){

        let masterData = data.map(m => [
          m.id,
          m.username,
          m.email,
          m.active,
          m.role
        ]);
        

        setGridRows((prev) => ({
          ...prev,
          userrolecreation: masterData,
        }));
        
       
        toast.success("Retrieved all master data from database!", {
          position: "top-right",
          theme: "colored", 
          style:{fontSize:'12px'} 
        });
        

      }else{
        setGridRows((prev) => ({
          ...prev,
          userrolecreation:[],
        }));

        throw new Error("No data!")
      }
      
      
    } catch (error) {
      toast.error(`Something went wrong retrieving master data:${error}!`,{
        position: "top-right",
        theme: "colored", 
        style:{fontSize:'12px'} 
      })
      console.error("Error fetching master data:", error);
    }
  };

  const handleSubmitGenCode = async (e, category) => {
    try{
      e.preventDefault();
      let reqBody = {
        category: selectedCategory,
        code,
        description,
        created_by:userId
      };

      let response= await APIService.post("/masterdata/createNew", reqBody)

      console.log(response)

      if (response.status==200){
        toast.success("Successful creation of data!",{
          position: "top-right",
          theme: "colored", 
          style:{fontSize:'12px'} 
        })
      }
      await fetchCategories();
      await fetchGenCodeMasterData();

    }catch(error){
      toast.error(`Something went wrong:${error}`,
        { position: "top-right",
          theme: "colored", 
          style:{fontSize:'12px'} }
      )
    }
  };

  const handleSubmitEdit = async (rowData) => {
    try{

      if(selectedTab=="gencode"){

        let id= rowData[0];
        let code= rowData[2];
        let description=rowData[3];
        let reqBody = {
          id:id,
          code:code,
          description:description
        };

        let response= await APIService.post("/masterdata/updateMasterData", reqBody)


        if (response.status==200){
          toast.success("Successful update of data!",{
            position: "top-right",
            theme: "colored", 
            style:{fontSize:'12px'} 
          })
        }
        await fetchCategories();
        await fetchGenCodeMasterData();

      }

      if(selectedTab=="userrolecreation"){

        let id= rowData[0];
        let username= rowData[1];
        let email=rowData[2];
        let active=rowData[3]==true?1:0;
        let role=rowData[4];
        let reqBody = {
          id:id,
          username:username,
          email:email,
          active:active,
          created_by:userId,
          role:role,
        };

        let response= await APIService.post("/users/updateData", reqBody)


        if (response.status==200){
          toast.success("Successful update of data!",{
            position: "top-right",
            theme: "colored", 
            style:{fontSize:'12px'} 
          })
        }
        await fetchUserMasterData();
        

      }
      

    }catch(error){
      toast.error(`Something went wrong:${error}`,
        { position: "top-right",
          theme: "colored", 
          style:{fontSize:'12px'} }
      )
    }
  };

  const handleSubmitDelete = async (rowData) => {
    try{

      if(selectedTab=="gencode"){

        let id= rowData[0];
        
        let reqBody = {
          id:id,
        };

        let response= await APIService.post("/masterdata/deleteMasterData", reqBody)


        if (response.status==200){
          toast.success("Successful delete of data!",{
            position: "top-right",
            theme: "colored", 
            style:{fontSize:'12px'} 
          })
        }
        await fetchCategories();
        await fetchGenCodeMasterData();

      }

      if(selectedTab=="userrolecreation"){

        let id= rowData[0];
        
        let reqBody = {
          id:id,
        };

        let response= await APIService.post("/users/deleteData", reqBody)


        if (response.status==200){
          toast.success("Successful delete of data!",{
            position: "top-right",
            theme: "colored", 
            style:{fontSize:'12px'} 
          })
        }

        await fetchUserMasterData();
        
      }
      

    }catch(error){
      toast.error(`Something went wrong:${error}`,
        { position: "top-right",
          theme: "colored", 
          style:{fontSize:'12px'} }
      )
    }
  };

  

  useEffect(() => {
    fetchCategories();
    fetchGenCodeMasterData();
    fetchUserMasterData();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
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
          <Tab label="GenCode Creation" value="gencode" />
          <Tab label="User and Role Creation" value="userrolecreation" />
          <Tab label="Category Mapping" value="categorymapping" />
        </Tabs>
      </Box>

      <Card style={{ height: "500px", marginTop: "10px", marginBottom: "10px" }}>
        <Box p={2}>
          {selectedTab === "gencode" && (
            <>
            <form onSubmit={(e) => handleSubmitGenCode(e, "gencode")}>
              {/* Category Dropdown */}
              <select
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{marginRight:'10px'}}
              >
                <option value="">Select Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category.code}>{category.code}</option>
                ))}
              </select>

              {/* Code Input */}
              <input
                type="text"
                name="code"
                value={code}
                placeholder="GenCode"
                style={{marginRight:'10px'}}
                onChange={(e) => setCode(e.target.value)}
              />

              {/* Description Input */}
              <input
                type="text"
                name="description"
                value={description}
                placeholder="Description"
                style={{marginRight:'10px'}}
                onChange={(e) => setDescription(e.target.value)}
              />

              {/* Submit Button */}
              <button type="submit" style={{marginRight:'10px'}}>Create GenCode</button>

              
              
            </form>
            <div style={{display:'flex', flexDirection:'row'}}>
                <button type="button" onClick={handleAddRow}>Add Row</button>
                <button onClick={handleFetchGridData}>Get Grid Data</button>
            </div>
           
            </>
            
          )}

          {selectedTab === "userrolecreation" && (
            <>
           
            <button onClick={handleFetchGridData}>Get Grid Data</button>
            </>
            
          )}

          {selectedTab === "categorymapping" && (
            <>
             <form onSubmit={(e) => handleSubmit(e, "categorymapping")}>
              <input type="text" name="category" placeholder="Category Name" />
              <button type="submit">Map Category</button>
              <button type="button" onClick={handleAddRow}>Add Row</button>
             
            </form>
            <button onClick={handleFetchGridData}>Get Grid Data</button>
            </>
           
          )}
        </Box>

        <HandsOnGrid
          ref={handsOnRef} 
          columns={columnConfig}
          columnHeaders={columnHeaders}
          rows={rowData}
          buttonConfig={buttonConfig}
          setRows={(updatedRows) =>
            setGridRows((prev) => ({
              ...prev,
              [selectedTab]: updatedRows,
            }))
          }
        />
      </Card>
    </DashboardLayout>
  );
}

export default Master;

