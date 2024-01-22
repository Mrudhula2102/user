import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'

import Topbar from '../Topbar/Topbar'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Guestuser = (props) => {
  var [guestuser,setguestuser]=useState({"gid":'',"gname":'',"gage":'',"gaddress":'',"gstatus":'ACTIVE'})

  const navigate = useNavigate();
  const inputhandler =(event)=> {
      const {name,value}=event.target
      setguestuser((guestuser)=>({...guestuser,[name]:value}))
      console.log(guestuser)
  }
  
  const savedata =(event) =>{
    event.preventDefault();
    axios.post("http://localhost:4005/new3",guestuser)
    .then((response) =>{
    alert("Record Saved")
    navigate('/guestView')
    })
    .catch(err=>console.log(err))
    }
  return (
    <div>
      <div><Topbar xxx={props.checkLogout}/><Sidebar/></div>
      <div className='bb'>
      <div className='div'>
      <h1>Guestuser Details</h1>
      <TextField  label="ID" variant="filled" name="gid" value={guestuser.gid} onChange={inputhandler}/><br/><br/>
      <TextField  label="name" variant="filled" name="gname" value={guestuser.gname}  onChange={inputhandler}/><br/><br/>
      <TextField  label="Age" variant="filled" name="gage" value={guestuser.gage}  onChange={inputhandler} /><br/><br/>
      <TextField  label="Address" variant="filled" name="gaddress" value={guestuser.gaddress}  onChange={inputhandler} /><br/><br/>
      Status: &nbsp;&nbsp;
      <select name="gstatus" value={guestuser.gstatus}  onChange={inputhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select>
      <br/><br/>
      <Button variant="contained" onClick={savedata}>SUBMIT</Button>
    </div>
      </div>
      
    </div>
  )
}

export default Guestuser