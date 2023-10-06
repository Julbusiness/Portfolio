import './RightCardThin.css'

export default function RightCardThin(props) {
  return (
    <div className='right-card-thin'>
    <div className='right-card-thin-text'>
      <h2>{props.title}</h2>
      <p>
        {props.text}
      </p>
    </div>
    <div className='right-card-thin-image'>
      <img src={props.image} alt='' />
    </div>
  </div>
  )
}