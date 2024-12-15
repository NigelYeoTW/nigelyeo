import './Loading.css';

function Loading() {

  return (
    <div className="logo-container">
      <svg>
        <text x="50%" y="50%" dy=".32em" textAnchor="middle" className="circle-one">
          O
        </text>
        <text x="51.5%" y="50%" textAnchor="middle" className="circle-two">
          O
        </text>
        <text x="51.5%" y="56%" textAnchor="middle" className="l-stroke">
          l
        </text>
      </svg>
    </div>
  )
}

export default Loading;