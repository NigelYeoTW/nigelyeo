import './MainPageSelection.css';
import react from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router';

function MainPageSelection() {

  const targetRef = useRef(null);
  
  const options = {
    root: null,
    threshold: 0.65,
    rootMargin: "0px",
  };

  let allJiggle = document.querySelectorAll('.select');

  useEffect(() => {
    allJiggle = document.querySelectorAll('.select');
    const target = targetRef.current;
    const theObserver = new IntersectionObserver(intersectionCallback, options);
    if (target) {
      theObserver.observe(target);
    }

    return () => {
      if (target) {
        theObserver.unobserve(target);
      }
    }
  }, [])

  const dummy = () => {

  }

  function intersectionCallback(entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      allJiggle.forEach((jiggleEntry) => {
        jiggleEntry.classList.add("jiggle");
      })
    } else {
      allJiggle.forEach((jiggleEntry) => {
        jiggleEntry.classList.remove("jiggle");
      })
    }
  }

  return (
    <div ref={targetRef} className="selection-overall">
      <div className="projects select">
        <span>PROJECTS</span>
      </div>
      <Link to='/ExpAwards' className='link'>
      <div className='work-awards select'>
        <span>EXPERIENCE & AWARDS</span>
      </div>
      </Link>
      <Link to='/Hobbies' className='link'>
      <div className='hobbies select'>
        <span>HOBBIES</span>
      </div>
      </Link>
    </div>
  )
}

export default MainPageSelection;