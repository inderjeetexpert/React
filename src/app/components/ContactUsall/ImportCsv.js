import React from 'react';
import axios ,{post} from 'axios';
import Config from '../../config';
import ReactFileReader from 'react-file-reader';

class ImportCsv extends React.Component{
  constructor(){
    super()
    this.state={
      data : [],
      errorMsg : null,
      datailInfo: null,
			busy : false,
			recordcount: 0
    }
    this.handleFiles = this.handleFiles.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
  }

  handleFiles(files) {
    console.log(files)
    this.uploadFile(files[0])
  }

  uploadFile(file){
    console.log(file)
    const formData = new FormData();
    const config = {
      headers:{
        'Authorization':"Token "+localStorage.getItem('key'),
        'content-type':'multipart/form-data'
      }
    }
    const url = Config.apiBaseUrl+'api/v1/contacts/import/csv/'
    formData.append('csv',file)
    axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key')
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
    // axios.post(Config.apiBaseUrl+'api/v1/contacts/import/csv/',formData).then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })
    post(url,formData,config).then(res=>{
      console.log(res);
      this.props.refreshList()
    }).catch(err=>{
      console.log(err);
    })
  }

   handleAction(event){
     this.setState({errorMsg : null,busy : true});
     axios.defaults.headers.common['Authorization'] = "Token "+localStorage.getItem('key');
     axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.post(Config.apiBaseUrl+'api/v1/contacts/import/csv/').then(res=>{
    }).catch(err=>{
      this.setState({busy : false});
      //console.log(err)
    })
   }

  render(){
  return(
    <ReactFileReader handleFiles={this.handleFiles}>
        <button className='btn btn-default'>CSV</button>
    </ReactFileReader>
  )
  }
  }
  export default ImportCsv
