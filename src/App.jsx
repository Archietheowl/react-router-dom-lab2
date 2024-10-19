// src/App.jsx
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";

import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";

const App = () => {
  //!---States
  const [mailboxes, setMailboxes] = useState([])

  //!---Functions/Handlers
  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length +1;
    setMailboxes([...mailboxes, newMailboxData])
  }

  //!---Render
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<h1><main>Post Office</main></h1>}></Route>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}></Route>
        <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/>}></Route>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}></Route>
        <Route path='/' element={<h2>Home Page</h2>}></Route>
        <Route path='*' exact={true }element={<h2>Whoops, nothing here!</h2>}></Route>
      </Routes>
    </>
  )
};

export default App;
