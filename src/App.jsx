// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";

import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";
import LetterForm from "./components/LetterForm";

const App = () => {
  //!---States
  const [mailboxes, setMailboxes] = useState([])
  const [letters, setLetters] = useState([])

  //!---Functions/Handlers
  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length +1;
    setMailboxes([...mailboxes, newMailboxData])
  }

  const addLetter = (newLetterData) => {
    newLetterData._id = letters.length +1;
    setLetters([...letters, newLetterData])
  }
  //!---Render
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<h1><main>Post Office</main></h1>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/>}/>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}/>
        <Route path='/new-letter' element={<LetterForm addLetter={addLetter}/>}/>
        <Route path='*' exact={true }element={<h2>Whoops, nothing here!</h2>}/>
      </Routes>
    </>
  )
};

export default App;
