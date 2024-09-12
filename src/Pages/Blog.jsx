import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <>
    <Container>

      <h1 style={{textAlign:"center"}}> Our Blog</h1>
      <div id="bl">
        <div>
          <img src="https://neemans.com/cdn/shop/articles/blogcover_210224_1.jpg?v=1708497701&width=800"style={{width:"100%",height:"400px"}} />
          <br />
          February 21, 2024
          <br />
          2024 in footwear: The trends ruling this year This year, take a
          literal approach to great beginnings and spend 2024 in style &
          comfort. Sure, we’re well into F...
        </div>
        <div>
          <img src="https://neemans.com/cdn/shop/articles/Sneakerhead-Chronicles_cover.jpg?v=1692855016&width=800" style={{width:"100%",height:"400px"}}/>
          <br />
          February 21, 2024
          <br />
          2024 in footwear: The trends ruling this year This year, take a
          literal approach to great beginnings and spend 2024 in style &
          comfort. Sure, we’re well into F...
        </div>
      </div>
      <br/>
      <div id="bl">
        <div>
          <img src="https://neemans.com/cdn/shop/articles/imgpsh_fullsize_anim_11.jpg?v=1681892248&width=800" style={{width:"100%",height:"400px"}}/>
          <br />
          April 19, 2023
          <br />
          Ease into Comfort with Neeman’s Everyday Basic Collection When it
          comes to leading an active lifestyle, having the right gear is
          crucial, and your footwear plays a key role. N...
        </div>
        <div>
          <img src="https://neemans.com/cdn/shop/articles/blogcover_footwearcapsulewardrobe_220523.jpg?v=1684842549&width=800" style={{width:"100%",height:"400px"}}/>
          <br />
          May 23, 2023
          <br />
          How to Build the Ultimate Footwear Capsule Wardrobe “Capsule
          wardrobe”. Chances are that you have come across this term multiple
          times on social media by the advocates o...
        </div>
      </div>
      </Container>
    </>
  );
};

export default Blog;
