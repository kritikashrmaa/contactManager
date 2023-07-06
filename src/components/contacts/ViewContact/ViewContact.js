import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import { ContactService } from '../../../services/ContactService';
import Spinner from '../../spinner/Spinner';

const ViewContact = () => {

  let {contactId}=useParams();

  let [state,setState]=useState({
    loading:false,
    contacts:[]
  })

  useEffect(()=>{

    const load=async()=>{
      try{
        let res=await ContactService.getContact(contactId);
        console.log(res.data);
        setState({...state,loading:false,contacts:res.data});

      }
      catch(err){
        setState({...state,loading:false});

      }
    }

    load();


  },[])

  if(state.loading){
    return <Spinner/>
  }
  return (
    <>
    <section className='view-contact-heading'>
     <div className="grid grid-cols-1">
       <p className="col-span-1 font-bold">View <span className='text-yellow-500  '>Contact</span> </p>  
     </div>  
    </section>

    <section className='view-contact mt-8'>
      <div className="grid grid-cols-2 grid-rows-1">
          <div className="col1">
             <img src="https://th.bing.com/th/id/OIP.k5IKliwHRHtKyVramxE8MAHaFj?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="contact image" className='w-30 h-40 rounded-full' />
          </div>
          <div className="col2">
          <ul className='border divide-y divide-gray-200'>
            <li className='p-4 hover:bg-gray-100'>
                  First Name : <span className='text-bold'>{state.contacts.fname}</span>
            </li>
            <li className='p-4 hover:bg-gray-100'>
                  Last Name : <span className='text-bold'>{state.contacts.lname}</span>
            </li>
            <li className='p-4 hover:bg-gray-100'>
                  Email : <span className='text-bold'>{state.contacts.email}</span>
            </li>
            <li className='p-4 hover:bg-gray-100'>
                  Status : <span className='text-bold text-green-500'>{state.contacts.active?'active':'inactive'}</span>
            </li>

          </ul>
          </div>
          <div className="div mt-4">
          <Link className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded max-xl' to={'/contacts/list'}>Back to Contacts</Link>
          </div>
          
         
      </div>
      

     
    </section>
    </>
  )
}

export default ViewContact
