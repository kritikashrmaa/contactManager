import axios from 'axios';
 //JSON SERVER 

export class ContactService{
    static serverURL='http://localhost:9000';

    static getAllContacts(){                           //Getting data from server
        let data=`${this.serverURL}/contacts`
        return axios.get(data);
    }

    static getContact(contactId){ 
        let data=`${this.serverURL}/contacts/${contactId}`
        return axios.get(data);
    }

    static createContact(contact){                   //adding data
        let data=`${this.serverURL}/contacts`;
        return axios.post(data,contact);
    }
                                                     //deleting data
    static deleteContact(contactId){
        let data=`${this.serverURL}/contacts/${contactId}`
        return axios.delete(data);
    }

    static updateContact(contact,contactId){         //updating data
        let data=`${this.serverURL}/contacts/${contactId}`
        return axios.put(data,contact);
    }
}