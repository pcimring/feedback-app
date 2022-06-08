import {useState} from 'react';

function FeedbackItem() {

  const [rating, setRating] = useState(6);
  const [text, setText] = useState("This is an example if a feedback item.");

  const handleClick = () => {
    setRating(prevValue => ++prevValue);
  }

  return (
    <div className='card'>
        <div className='num-display'>{rating}</div>
        <div className="text-display">{text}</div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
export default FeedbackItem