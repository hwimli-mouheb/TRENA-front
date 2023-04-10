import React, { useState, useEffect ,useRef } from "react";
import MaterialTable, { MTablePagination } from 'material-table'
import { TablePagination, Grid, Typography, Divider } from '@material-ui/core'
import data from '../../common/data/Terrains.json'
import tableIcons from "./IconProvider";

export const Table = (props) => {
    const tableRef = useRef();

   
    const [Data, setData] = useState([]);
  
    useEffect(() => {
        setData(data);
        console.log(data);
    }, [])
  

    const [selectedRows, setSelectedRows] = useState([]);
    const columns = [
       
        { title: "Terrain", field: "title", searchable: false, filtering: true , align: "center"},
        { title: "Surface", field: "surface",type:'numeric', searchable: false, filtering: false , align: "center"},
        { title: "Type", field: "type", sorting: false, searchable: false,  align: "center" }, 
        { title: "Address",  field: "address", searchable: false, sorting: true, filtering: false, align: "center" },
        { title: "Disponible", field: "available", sorting: false, searchable: false, align: "center",lookup:{"true":"Disponible","false":"Non Disponible"} }

    ];
    
    
   
   
    return (
        <>
        
            <div style={{ maxWidth: '97%', margin: 'auto',paddingTop:'30px'}}>
               
                <MaterialTable
                    tableRef={tableRef}
                    title="Terrains"
                    icons={tableIcons}
                    columns={columns}
                    editable={{
                        onRowAdd: (newRow) => new Promise((resolve, reject) => {
                          const updatedRows = [...Data, { id: Math.floor(Math.random() * 100), ...newRow }]
                          setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                          }, 2000)
                        }),
                        onRowDelete: selectedRow => new Promise((resolve, reject) => {
                          const index = selectedRow.tableData.id;
                          const updatedRows = [...data]
                          updatedRows.splice(index, 1)
                          setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                          }, 2000)
                        }),
                        onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
                          const index=oldRow.tableData.id;
                          const updatedRows=[...data]
                          updatedRows[index]=updatedRow
                          setTimeout(() => {
                            setData(updatedRows)
                            resolve()
                          }, 2000)
                        })
              
                      }}
                    data={Data}
                    options={{
                        sorting: true,
                        filtering: false,
                        paging: false,
                        search:false,
                        
                        
                        addRowPosition: "first",
                        actionsColumnIndex: -1,
                        selection: false,
                        rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : { background: "#f5f5f5" },
                        headerStyle: { background: "#005236", color: "white" },
                        
                    }}
                   
                />
            </div>

            {props.children}
        </>
    );
};
