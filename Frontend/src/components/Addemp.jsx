import { Button, TextField } from '@mui/material'
import React from 'react'

const Addemp = () => {
  return (
      <div>
          <h1>Add Details</h1>
          <TextField label='Name' variant='filled'></TextField><br></br><br></br>
          <TextField label='Age' variant='filled'></TextField><br></br><br></br>
          <TextField label='Department' variant='filled'></TextField><br></br><br></br>
          <TextField label='Salary' variant='filled'></TextField><br></br><br></br>
          <Button variant='contained'>Submit</Button> &nbsp;
    </div>
  )
}

export default Addemp