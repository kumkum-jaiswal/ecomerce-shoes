import { useNavigate } from 'react-router-dom';

const Hblog = () => {
    const navigate= useNavigate();
    const handle=()=>{
        navigate("/blog"); 
    }
    return ( 
        <>
        <h2 style={{textAlign:"center"}}>Our Blogs</h2>
        <div id="hblog">
            <img src="https://neemans.com/cdn/shop/files/Blog_01_-_Mobile.jpg?v=1712753725&aio=noopt"/>
            <img src="https://neemans.com/cdn/shop/files/Blog_02_-_Mobile_98f898ba-3980-48e0-8e67-dab5008f05ba.jpg?v=1712753886&aio=noopt"/>
            <img src="https://neemans.com/cdn/shop/files/Blog_03_-_Mobile.jpg?v=1712753725&aio=noopt"/>
            <img src="https://neemans.com/cdn/shop/files/Blog_04_-_Mobile.jpg?v=1712753725&aio=noopt"/>
        </div>
        <br/>
        <button id="btn"onClick={handle}>View All Blogs</button>
        

        </>
     );
}
 
export default Hblog;