import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ContactService } from '../../../services/ContactService';
import Spinner from '../../spinner/Spinner';

const Editcontact = () => {

  let {contactId}=useParams();
  let [state,setState]=useState({
    loading:false,
    contacts:{
      fname:'',
      lname:'',
      email:'',
      active:''
    },
  })

  let navigate=useNavigate();

 
  


  let update=(e)=>{
   
    setState({
     ...state,
     contacts:{
       ...state.contacts,
      // active:e.target.active.value==='true',
       [e.target.name]:e.target.value,
       active:e.target.name==='active'?true:false

     }
    })
 }

  useEffect(()=>{

    let fetch=async()=>{
      try{

       setState({...state,loading:true});
       let res=await ContactService.getContact(contactId);
      
       setState({
        ...state,
        loading:false,
        contacts:res.data

       })


      }catch{

        setState({...state,loading:false});

      }
    }

    fetch();

  },[contactId])

  let {contacts,loading}=state;

  

  const submitForm=async(e)=>{
    e.preventDefault();

    try{
      let res= await ContactService.updateContact(state.contacts,contactId);
      if(res){
        navigate('/contacts/list',{replace:true});
        
      }


    }catch(e){
      navigate(`/contacts/edit/${contactId}`,{replace:false});

    }

  }

  if(loading){
    return <Spinner/>
  }

  return (
    <div className="container ml-6">
      <pre>{JSON.stringify(contacts)}</pre>
      <div className="flex pt-7">
        <p className="text-black text-xl font-semibold">Edit Contact</p>
      </div>

      <div className="flex">
          <div className="w-1/2">
            <form onSubmit={submitForm}>
              <div className="mb-2">
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="First Name"  name="fname" onChange={update} value={contacts.fname}/>
              </div>
              <div className="mb-2">
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="Last Name"  name="lname" onChange={update} value={contacts.lname}/>
              </div>
             <div className="mb-2">
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="Email" value={contacts.email} name="email" onChange={update}/>
              </div>

              <div className="mb-2">
                <input type="radio" id="active" name="active" value={contacts.active} className="form-radio h-4 w-4 text-blue-500"/>
                <label htmlFor="active" className="ml-2">Active</label><br/>
                <input type="radio" id="nactive" name="nactive" value={contacts.active} className="form-radio h-4 w-4 text-blue-500"/>
                <label htmlFor="nactive" className="ml-2">Not Active</label><br/>
              </div>

              <div className="mb-2 flex gap-7">
                <input type="submit" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-9 rounded' value="Update" />
                <Link to={`/contacts/list`} className='bg-black hover:bg-stone-600 text-white font-bold py-2 px-9 rounded'>Cancel</Link>
              </div>
            </form>
        </div>
    </div>
  </div>
 
  )
}

export default Editcontact
