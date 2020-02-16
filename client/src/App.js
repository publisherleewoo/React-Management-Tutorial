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
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme =>({
  root:{
    width:'100%',
    marginTop:theme.spacing(3),
    overflowX:"auth"
  },
  table:{
    minWidth:1080
  },
  progress:{
    marginTop:theme.spacing(2),
  }
})

 

class App extends Component {
  constructor(){
    super();
    this.state={
      customers:"",
      completed:0
    }
  }
  
 
  componentDidMount(){
    this.timer = setInterval(this.progress,20);
    this.callApi().then(res=>{
      this.setState({customers:res},function(){
        clearInterval(this.timer)  
      })
    })
    .catch(err=>console.log(err))
  }
  callApi = async()=>{
    const response = await fetch('/api/customer')
    const body = await response.json();
    return body;
  }

  progress=()=>{
    const {completed} = this.state;
    this.setState({
      completed: completed >= 100 ? 0 : completed +1
    })


  }

  render() {
    
    const {classes} = this.props
    const {completed,customers} = this.state;
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
              (customers)?
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
                  : 
                  <TableRow>
                    <TableCell colSpan="6" align="center">
                    <CircularProgress
                    className={classes.progress} variant="determinate" value={completed} />
                    </TableCell>
                  </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
