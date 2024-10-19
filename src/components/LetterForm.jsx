//!---Imports
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const initialState = {
    mailbox: '',
    recipient: '',
    message: ''
}


const LetterForm = () => {
    //!--- Build States
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    //!--- Build Functions/Handlers    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addLetter(formData);
        console.log(formData)
        setFormData(initialState);
        // navigate('/mailboxes/SINGLEMAILBOX_ID CHECK THIS BUT DO I PASS BACK DOWN AS ANOTHER PROP FROM APP');
    }

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    }


    //!--- Render
    return(
        <main>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxSize">Box Size:</label>
                <select
                    id="mailbox"
                    name="mailbox"
                    value={formData.mailbox}
                    onChange={handleChange}>
                        {/* Fill the options with mail boxes */}
                    {props.mailboxes.map((mailboxId) => (
                        <option key={mailboxId._id} value="mailboxId." defaultValue>{mailboxId._id}</option>
                    ))}
                    
                </select>
                <br />
                <label htmlFor="boxholder">Your name:</label>
                <input
                    type="text"
                    id="boxholder"
                    name="boxholder"
                    value={formData.boxholder}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
} 

export default LetterForm
