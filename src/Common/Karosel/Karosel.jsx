import Carousel from 'react-bootstrap/Carousel';
import karoselData from '../../Assets/karosel';
import "./Karosel.css";
function Karosel() {
  return (
    <Carousel style={{"--delay": "0.5s"}} className='figure karosel-slide-in-bck-bottom'>
        {karoselData.map((data) => (
      <Carousel.Item className='figure' key={data.id} interval={3000}>
        <img src={data.path} alt={data.title} />
      </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default Karosel;