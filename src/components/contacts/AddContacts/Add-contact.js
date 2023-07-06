import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../../spinner/Spinner'
import { ContactService } from '../../../services/ContactService'


const Addcontact = () => {

  let navigate=useNavigate();

  let [state,setState]=useState({
    loading:false,
    contacts:{
      fname:'',
      lname:'',
      email:'',
      active:''
    },
  })

  let update=(e)=>{

    
     setState({
      ...state,
      contacts:{
        ...state.contacts,
        [e.target.name]:e.target.value,
        active:e.target.name==='active'?true:false

      }
     })
  }

  let submitForm=(e)=>{

    
    const fetch=async()=>{
      e.preventDefault();
      try{
        let res= await ContactService.createContact(state.contacts);
        if(res){
          navigate('/contacts/list',{replace:true});
          
        }


      }catch(e){
        navigate('/contacts/add',{replace:false});

      }
    }

    fetch();


  }

  

   let {loading,contacts}=state;

   if(loading){
    return <Spinner/>
   }

   
  return (
  <div className="container ml-6">
    <div className="flex pt-7">
        <p className="text-black text-xl font-semibold">Create Contact</p>
      </div>

      <div className="flex">
          <div className="w-1/2">
            <form onSubmit={submitForm}>
              <div className="mb-2">
                <input required={true} type="text" name="fname" value={contacts.fname} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="First Name" onChange={update}/>
              </div>
              <div className="mb-2">
                <input type="text" name="lname" value={contacts.lname} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="Last Name" onChange={update}/>
              </div>
             <div className="mb-2">
                <input type="text" name="email" value={contacts.email} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="Email" onChange={update}/>
              </div>

              <div className="mb-2">
                <input type="radio" id="active" name="active" value='true' className="form-radio h-4 w-4 text-blue-500" onChange={update}/>
                <label htmlFor="active" className="ml-2">Active</label><br/>
                <input type="radio" id="nactive" name="nactive" value="true" className="form-radio h-4 w-4 text-blue-500" onChange={update}/>
                <label htmlFor="nactive" className="ml-2">Not Active</label><br/>
              </div>

              <div className="mb-2 flex gap-7">
                <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-9 rounded'>Create</button>
                <Link to={`/contacts/list`} className='bg-black hover:bg-stone-600 text-white font-bold py-2 px-9 rounded'>Cancel</Link>
              </div>
            </form>
        </div>
    </div>
  </div>
 


    
  )
}

export default Addcontact
