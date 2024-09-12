
import Carousel from 'react-bootstrap/Carousel';

import Cards from "./HOME/Cards";
import Hblog from "./HOME/Hblog";
import ProCard from "./HOME/ProCard";

const Home = () => {

    return ( 
        <>
         <Carousel>
      <Carousel.Item>
        <img src="https://kxadmin.metroshoes.com/banner/1725601023Metro-Dude--DB-2.jpg"style={{width:"100%",height:"500px"}}/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://www.superkicks.in/cdn/shop/files/ASICS_GEL-NYC_2055_DESKTOP.jpg?v=1725448316' style={{width:"100%",height:"500px"}}/>
       
      </Carousel.Item>
      
    </Carousel>
    <ProCard/>
    
    <Cards/>
    <Hblog/>
        </>
     );
}
 
export default Home;