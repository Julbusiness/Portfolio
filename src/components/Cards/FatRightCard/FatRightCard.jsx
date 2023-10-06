import './FatRightCard.css'

export default function FatRightCard(props) {
  return (
    <div className='FatRightCard'>
    <div className='FatRightCard-text'>
      <h2>{props.title}</h2>
      <p>
        {props.text}
      </p>
    </div>
    <div className='FatRightCard-image'>
      <img src={props.image} alt='' />
    </div>
  </div>
  )
}