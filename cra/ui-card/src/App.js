import Card from "./Card.jsx";
import pic01 from "./assets/pic01.jpg"
import pic02 from "./assets/pic02.jpg";

function App() {
  return (
    <div style={{display: "flex", padding: "4px"}}>
      <Card
      title="BORA BORA"
      img= {pic01}
      description="Lose yourself in a private island paradise, where the waters teem with
        exotic fish and colorful coral."
      button="VIEW PROPERTY" />

<Card
      title="ANGUILLA"
      img= "https://www.fourseasons.com/alt/img-opt/~80.1530.0,0000-312,5000-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/AIL/AIL_273_original.jpg"
      description="Fill your days with water sports, pool time or exotic dining in the Caribbean's culinary capital."
      button="VIEW PROPERTY" />

<Card
      title="THE OCEAN CLUB A FOUR SEASONS RESORT, BAHAMAS"
      img= {pic02}
      description="Connect with true Bahamian beauty and enjoy remarkable seclusion at this legendary Caribbean hideaway."
      button="VIEW PROPERTY" />
    
    </div>
  );
}

export default App;
