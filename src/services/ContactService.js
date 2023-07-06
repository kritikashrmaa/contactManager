import axios from 'axios';


export class ContactService{
    static serverURL='http://localhost:9000';

    static getAllContacts(){
        let data=`${this.serverURL}/contacts`
        return axios.get(data);
    }

    static getContact(contactId){
        let data=`${this.serverURL}/contacts/${contactId}`
        return axios.get(data);
    }

    static createContact(contact){
        let data=`${this.serverURL}/contacts`;
        return axios.post(data,contact);
    }

    static deleteContact(contactId){
        let data=`${this.serverURL}/contacts/${contactId}`
        return axios.delete(data);
    }

    static updateContact(contact,contactId){
        let data=`${this.serverURL}/contacts/${contactId}`
        return axios.put(data,contact);
    }
}