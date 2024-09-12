import { useNavigate } from 'react-router-dom';

const ProCard = () => {
    const navigate= useNavigate();
    const handle=()=>{
        navigate("/product"); 
    }
    return ( 
        <>
            <div id='procard'>
                <img src="https://neemans.com/cdn/shop/files/Beige_aab11f1f-f59f-406b-8e07-8fc8f85a60c9.png?v=1725630553&width=450" />
                <img src="https://neemans.com/cdn/shop/files/Black-Blue.png?v=1725023388&width=450"/>
                <img src="https://neemans.com/cdn/shop/files/Ivory-Brown-Yellow_90c77c72-2d99-4ca2-976b-eed7da3e6d7a.png?v=1724986743&width=450"/>
                <img src="https://neemans.com/cdn/shop/files/Black_4044a475-9e9f-41f4-b4d4-ad163296da0a.png?v=1725094450&width=450"/>
                
                </div>
                <br/>
                <button id="btn"onClick={handle}>All Product</button>
            
           
        </>
     );
}
 
export default ProCard;