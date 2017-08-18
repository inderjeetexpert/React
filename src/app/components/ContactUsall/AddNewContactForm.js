import React from 'react'
import { LocalForm, Control } from 'react-redux-form'
import Config from '../../config';
import axios from 'axios';
import ImportGoogle from './ImportGoogle';
class AddNewContactForm extends React.Component{
  constructor(){
    super()
    this.state={
    }
  }

  handleSearch(event){
    const data={contact_name:this.state.contact_name,age:this.state.age,address:this.state.address,gender:this.state.gender,phones:this.state.phones,emails:this.state.emails,company:this.state.company};

    this.setState({errorMsg : null,busy : true});
        //b38b499d11d4583b17a79491f8a328428dbed5ef
    		//axios.defaults.headers.common['Authorization'] = "Token 4cfe08fcdb487a06c3f66a761a848d0eebfa5d8f";

  }

  //handle form submit
  handleSubmit(values){
    let data = {
      phones :[],
      emails : []
    };
    data.phones[0]= values.phones;
    data.contact_name = values.contact_name;
    data.address = values.address;
    data.company = values.company;
    data.emails[0] = values.emails;
    data.age = values.age;
    data.gender = values.gender;
    axios.defaults.headers.common['Authorization'] = "Token " + localStorage.getItem('key');
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.post(Config.apiBaseUrl+'api/v1/contacts/',data).then(res=>{
      this.setState({data:res.data,recordcount:res.data.length, busy:false})
      console.log(res)
    }).catch(err=>{
      this.setState({busy : false});
      //console.log(err)
    })
  }

  handleUpdate(form){}
  handleChange(values){
    //console.log(values)
  }

  render(){
    return(
      <LocalForm
          model="con"
          onUpdate={(form) => this.handleUpdate(form)}
          onChange={(values) => this.handleChange(values)}
          onSubmit={(values) => this.handleSubmit(values)}
      >
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="form-group">
                  <Control.text model="con.contact_name" className="form-control" placeholder="Contact Name" />
              </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="form-group">
                  <Control.text model="con.phones[]" className="form-control" placeholder="Phone No." />
              </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="form-group">
                  <Control.text model="con.address" className="form-control" placeholder="Address" />
              </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="form-group">
                  <Control.text model="con.company" className="form-control" placeholder="Company" />
              </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="form-group">

                  <Control.text model="con.emails" className="form-control" placeholder="Email" />
              </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="form-group">

                  <Control.text model="con.age" className="form-control" placeholder="Age" />
              </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="form-group">
                  <Control.select model="con.gender" className="form-control" placeholder="Gender" >
                      <option>Select</option>
                      <option value="male">male</option>
                      <option value="female">female</option>

                  </Control.select>
              </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-lg mr-15" >Submit</button>
                  <button className="btn btn-default btn-lg mr-15" >Cancel</button>
                  <ImportGoogle/>
              </div>
          </div>
      </LocalForm>
    )
  }
}

export default AddNewContactForm
