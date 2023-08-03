import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { NavLink, useLoaderData, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"; 
import useFetch from '../../hooks/useFetch';
import axios from "axios";
const Datatable = (props) => {
  // const [data, setData] = useState(userRows);
  const [list,setList] =useState();
  const location = useLocation();
  const path=location.pathname.split("/")[1];
  console.log(path);
 const {data,loading,error} = useFetch(`/${path}`);

 useEffect(()=>{
     setList(data);
 },[data])
  const handleDelete = async (id) => {
    try{
           await axios.delete(`/${path}/${id}`);
           setList(list.filter((item) => item._id !== id));
    }catch(err){ }
 
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <NavLink to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </NavLink>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
         
        <NavLink to={`/${path}/new`} className="link">
          {path}
        </NavLink>
      </div>
      {data && <DataGrid
        className="datagrid"
        rows={list}
        columns={props.columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row)=> row._id}
      />}
    </div>
  );
};

export default Datatable;
