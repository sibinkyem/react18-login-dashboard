import React from 'react'
import Button from "@mui/material/Button";

export default function Logout(props) {

  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button onClick={props.setLoggedIN} variant="contained">Login</Button>
    </div>
  )
}
