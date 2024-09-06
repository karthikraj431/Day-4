import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const Viewemp = () => {
    var [user, setUser] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3004/find")
            .then((response) => {
                console.log(response)
                setUser(response.data)
            })
    })
    const delValue = (id) => {
        axios.delete('http://localhost:3004/remove/' + id)
            .then((response) => {
                console.log(response.data.message)
                
            })
    }
  return (
      <div><TableContainer component='Paper'>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Salary</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {user.map((val) => {
                      return (

                          <TableRow>
                              <TableCell>{val.Name}</TableCell>
                              <TableCell>{val.Age}</TableCell>
                              <TableCell>{val.Dept}</TableCell>
                              <TableCell>{val.Sal}</TableCell>
                              <TableCell><Button size='small' variant='contained' onClick={() => {
                                  updValue(val._id)}}>Update</Button></TableCell>
                              <TableCell><Button size='small' variant='contained' onClick={() => {
                                  delValue(val._id)}}>Delete</Button></TableCell>
                          </TableRow>

                      )
                  })}
              </TableBody>

          </Table>
      </TableContainer></div>
  )
}

export default Viewemp