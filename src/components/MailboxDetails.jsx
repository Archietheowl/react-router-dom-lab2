//!--- Imports
import { useParams } from "react-router-dom"


const MailboxDetails = (props) => {
    //!--- Build Functions/Handlers  
    console.log(props);
    const {mailboxId } = useParams();
    const singleMailbox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
    console.log('Mailbox Object:', singleMailbox)

    //!--- Render 
    return (
        <>
            <h1>Mailbox {singleMailbox._id}</h1>
            <dl>Mailbox Size:</dl>
            <dd>{singleMailbox.boxSize}</dd>
            <dl>Mailbox Holder</dl>
            <dd>{singleMailbox.boxholder}</dd>
        </>
    )
}
export default MailboxDetails