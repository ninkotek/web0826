import pic01 from "./assets/pic01.jpg";

function Card() {
 
  return (
    <div className="card">
      <h3>BORA BORA</h3>
      <img src={pic01} alt="" />
      <p>
        Lose yourself in a private island paradise, where the waters teem with
        exotic fish and colorful coral.
      </p>    
      <span>VIEW PROPERTY</span>
    </div>
  );
}

export default Card;
