
import './App.css';
import { Route,Routes,Navigate} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ContactList from './components/contacts/ContactList/Contact-List';
import Addcontact from './components/contacts/AddContacts/Add-contact';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import Editcontact from './components/contacts/EditContact/Edit-contact';
import Chart from './components/charts/Chart';


function App() {
  return (
    <>

    <NavBar/>
    <Routes>
      <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
      <Route path={'/charts'} element={<Chart/>}/>
      <Route path={'/contacts/list'} element={<ContactList/>}/>
      <Route path={'/contacts/add'} element={<Addcontact/>}/>
      <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
      <Route path={'/contacts/edit/:contactId'} element={<Editcontact/>}/>
    </Routes>


       
    </>
  );
}

export default App;
