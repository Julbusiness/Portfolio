import desktop from '../../assets/desktop.jpeg'

import "./Home.css";

export default function Home() {
  return (
    <section className='home'>
    <div className='image-container'>
      <div className='image-home'>
        <img src={desktop} alt="desktop" />
      </div>
      <h1 className='title'>Julien<span>.</span></h1>
      <div className='profession'>Développeur Front-End</div>
    </div>
    <div className='catchphrase'>
      <p className='description'>Transformez vos idées en réalités digitales</p>
      <div className='fat'></div>
      <div className='line'></div>
    </div>
    </section>
  );
}
