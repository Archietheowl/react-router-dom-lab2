//!--- Imports
import { Link } from "react-router-dom"


const MailboxList = (props) => {

    //!--- Build States

    //!--- Build Functions/Handlers    

    //!--- Render 
    return (
        <>
            <h1>Mailboxes</h1>
            <ul>
                {props.mailboxes.map((currentMailbox) => {
                    <li key={currentMailbox._id}>
                        <Link to={`/mailboxes/${currentMailbox._id}`}>
                            {currentMailbox.boxSize}
                        </Link>
                    </li>
                })}
            </ul>
        </>
    )
}
export default MailboxList