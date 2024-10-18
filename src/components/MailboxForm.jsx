//!--- Imports
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const initialState = {
    boxSize: '',
    boxholder: ''
}


const MailboxForm = (props) => {
    //!--- Build States
    const [formData, setFormData]= useState(initialState);
    const navigate = useNavigate();

    //!--- Build Functions/Handlers    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMailbox(formData);
        console.log(formData)
        setFormData(initialState);
        navigate('/mailboxes');
    }

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value});
    }

    //!--- Render 
    return (
        <main>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxSize">Box Size:</label>
                <select 
                type="text"
                id="boxSize"
                name="boxSize"
                value={formData.boxSize}
                onChange={handleChange}
                >
                    <option value="box_size" defaultValue>Box Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
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
export default MailboxForm