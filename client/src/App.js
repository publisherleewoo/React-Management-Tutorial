import React, { Component } from 'react';

import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {withStyles} from '@material-ui/core/styles'
 

const styles = theme =>({
  root:{
    width:'100%',
    marginTop:theme.spacing(3),
    overflowX:"auth"
  },
  table:{
    minWidth:1080
  }
})

var customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: "홍길동",
    birthday: "961222",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: "이순신",
    birthday: "961222",
    gender: "남자",
    job: "장군",
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: "김유신",
    birthday: "961222",
    gender: "남자",
    job: "신라장군",
  },
]

class App extends Component {
  render() {
    const {classes} = this.props
    return (
      <Paper className={classes.root}>
        <Table  className={classes.table}> 
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>image</TableCell>
              <TableCell>name</TableCell>
              <TableCell>birthday</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(customer =>
                <Customer
                  key={customer.id}
                  id={customer.id}
                  image={customer.image}
                  name={customer.name}
                  birthday={customer.birthday}
                  gender={customer.gender}
                  job={customer.job}
                />
              )
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
