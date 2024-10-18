//!--- Imports
import { Link } from 'react-router-dom';




const NavBar = () =>{
    //!--- Build States


    //!--- Build Functions/Handlers    


    //!--- Render 
    return( 
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/mailboxes'>Mailboxes</Link>
            </li>
            <li>
                <Link to='/new-mailbox'>NewMailbox</Link>
            </li>
        </ul>
    )       
}

export default NavBar