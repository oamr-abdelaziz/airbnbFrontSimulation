import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Table , Button} from "reactstrap"
import { axiosInstance } from "../../../../axiosInstance"
import { getPlace } from "../../../../store/actions/getPlaceAction"
import "./DashBoard.css"

export default function DashBoard ({setEdit}){
    const places = Object.values(useSelector(state => state.Places))
    const dispatch = useDispatch();    
    dispatch(getPlace());
    
    
    const getRows=()=>{
        let rows=[]
        for (let index = 0; index < places.length; index++) {
            if (places[index]!=null) {
                rows.push(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{places[index].title}</td>
                        <td>{
                            places[index].summary.length>70?places[index].summary.slice(0,70)+"...":places[index].summary
                            
                        }</td>
                        <td><Button className="Button" onClick={setEdit} ><Link className="linkBtn" to={`/placeHosting/editPlace/${places[index]._id}`}>Edit</Link></Button></td>
                        <td><Button className="Button" onClick = {()=>deletePlace(places[index]._id)} >Delete</Button></td>
                    </tr>
                )          
            }  
        }
        return rows
    }

    const deletePlace = async (id)=>{
       let res = await axiosInstance.delete(`hosting/deletePlace/${id}`)
       dispatch(getPlace())
    }

return(
    <div className="dashboardBody">
        <h4>My Hosting Places</h4>
        <div className="tablebody">
        <Table striped>
        <thead>
        <tr>
          <th>#</th>
          <th>Place title</th>
          <th>Description</th>
          <th>Edit place</th>
          <th>Delete place</th>
        </tr>
      </thead>
      
      <tbody>
        {getRows()}
      </tbody>
    </Table>
        </div>
 
    </div>
)
}