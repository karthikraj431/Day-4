import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar position='static'>
              <Toolbar>
              <Typography align='left' variant='h6' component="div" sx={{ flexGrow: 1 }}>Welcome</Typography>
              <Link to='/add'>
                      <Button variant='contained'>Add</Button></Link>&nbsp;
                  <Link to='/view'>
                      <Button variant='contained'>View</Button></Link>&nbsp;
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar