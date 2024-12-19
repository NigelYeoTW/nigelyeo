import './ExpAwardsBody.css';
import sestoOne from './sesto-one.jpg';
import sestoTwo from './sesto-two.jpg';

function ExpAwardsBody() {
  return (
    <div className="exp-awards-body">
      <span>Experience</span>
      <div className='experience-grid'>
        <div className='experience-text'>
          <span>test</span>
        </div>
        <div className='experience-pic-container'>
          <div className='experience-pic-one'>
            <img src={sestoOne} className='sesto-one'></img>
          </div>
          <div className='experience-pic-two'>
            <img src={sestoTwo} className='sesto-two'></img>
          </div>
        </div>
      </div>
      <span>Awards</span>
    </div>
  )
}

export default ExpAwardsBody;