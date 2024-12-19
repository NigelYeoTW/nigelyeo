import "./Hobbies.css";
import react from 'react';
import { useEffect } from "react";
import ContactMe from "../ContactMe";
import Header from "../Header";
import HobbiesBody from "./HobbiesBody";

function Hobbies() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Header />
      <HobbiesBody />
      <ContactMe />
    </div>
  )
}

export default Hobbies;