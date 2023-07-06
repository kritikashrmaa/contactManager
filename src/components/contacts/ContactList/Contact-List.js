import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../NavBar/NavBar'
import { ContactService } from '../../../services/ContactService'
import Spinner from '../../spinner/Spinner'


const ContactList = () => {
   let [state,setState]=useState({
     loading:false,
     contacts:[],
   })


   useEffect(()=>{

    const fetch=async()=>{
      try{
        let res=await ContactService.getAllContacts();

         setState({...state,loading:false,contacts:res.data})
         

     }
     catch(err){
         setState({
          ...state,
          loading:false
         })

     }
    }

    fetch();

    

   },[]);


   const deleteContact=async(contactId)=>{
    try{

     let res=await ContactService.deleteContact(contactId);
     if(res){

       let res=await ContactService.getAllContacts();

       setState({...state,loading:false,contacts:res.data})

     }

    }catch(e){

     setState({
       ...state,
       loading:false
      })

    }

}

   if(state.loading){
    return <Spinner/>

   }

   
  return (
    <>
        <section className='contact-list'>
         
          <div className="container mx-auto">
            <div className="grid">
              <div className="grid-rows-1">
                <div className="grid-cols-1">
                  <div className="flex gap-4 pt-6">
                    <p className='text-lg'>Contact List</p>
                       <Link to={'/contacts/add'} 
                        className='bg-yellow-300 hover:bg-black hover:text-yellow-300 text-black font-bold py-1 px-3 rounded'>
                           <i className='fa fa-plus-circle'/> New
                       </Link>
                  </div>

                  <p className='pt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Vel exercitationem dolore aliquid est incidunt quos quibusdam 
                    excepturi necessitatibus officiis facilis!
                  </p>

                </div>


              </div>
            </div>
          </div>
        </section>

  <section className="contact-list  mx-9 my-9 ">
    <div className={`max-w-lg max-h-31 bg-white shadow-lg rounded-lg overflow-hidden grid gap-4 `}>
      {
        state.contacts.length>0 && state.contacts.map((contact)=>{
          return(
          <div className="grid grid-cols-2 mb-5" key={contact.id} >
          <div className="px-8 py-4">
            <h3 className="font-bold text-xl mb-2">Card Title</h3>
            <p className="text-gray-700 text-base">Card description goes here.</p>
          </div>
          <div className="px-6 py-4">
            <ul className='list-group'>
              <li>
                    First Name : <span className='text-bold'>{contact.fname}</span>
              </li>
              <li>
                    Last Name : <span className='text-bold'>{contact.lname}</span>
              </li>
              <li>
                    Email : <span className='text-bold'>{contact.email}</span>
              </li>

              <li>
                    Status : <span className='text-bold'>{contact.active?<span className='text-green-500'>Active</span>:<span className='text-yellow-500'>Inactive</span>}</span> 
              </li>
            </ul>
      
          </div>
  
          <div className="px-6 py-4 flex justify gap-8">
  
            <Link to={`/contacts/view/${contact.id}`} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-9 rounded'>
              <i className='fa fa-eye'/>
            </Link>
  
            <Link to={`/contacts/edit/${contact.id}`} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-9 rounded'>
              <i className='fa fa-pen'/>
            </Link>
  
            <Link  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-9 rounded' onClick={()=>deleteContact(contact.id)}>
              <i className='fa fa-trash'/>
            </Link>
          </div>
          
        </div>
        
          )
          
        })
      }
      

    </div>

  </section>



    </>
  )
}

export default ContactList
