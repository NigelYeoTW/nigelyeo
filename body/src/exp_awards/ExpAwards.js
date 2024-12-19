import ContactMe from '../ContactMe';
import react from 'react';
import { useEffect } from "react";
import Header from '../Header';
import './ExpAwards.css';
import ExpAwardsBody from './ExpAwardsBody';

function ExpAwards() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Header />
      <ExpAwardsBody />
      <ContactMe />
    </div>
  )
}

export default ExpAwards;