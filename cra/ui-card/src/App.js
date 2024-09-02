import Card from "./Card.jsx";

function App() {
  return (

    <div className="wrapper">
      <Card
        title="BORA BORA"
        img="https://www.fourseasons.com/alt/img-opt/~80.1530.0,0000-152,7500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BOR/BOR_004_original.jpg"
        description="Lose yourself in a private island paradise, where the waters teem with
          exotic fish and colorful coral."
        button="VIEW PROPERTY" />
      <Card
        title="ANGUILLA"
        img="https://www.fourseasons.com/alt/img-opt/~80.1530.0,0000-312,5000-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/AIL/AIL_273_original.jpg"
        description="Fill your days with water sports, pool time or exotic dining in the Caribbean's culinary capital."
        button="VIEW PROPERTY" />
      <Card
        title="THE OCEAN CLUB A FOUR SEASONS RESORT, BAHAMAS"
        img="https://www.fourseasons.com/alt/img-opt/~80.1530.0,0000-130,2500-2044,0000-1149,7500/publish/content/dam/fourseasons/images/web/MAN/MAN_2785_original.jpg"
        description="Connect with true Bahamian beauty and enjoy remarkable seclusion at this legendary Caribbean hideaway."
        button="VIEW PROPERTY" />

      <Card
        title="O'AHU AT KO OLINA"
        img="https://www.fourseasons.com/alt/img-opt/~80.1530.4,4444-0,0000-2995,5556-1685,0000/publish/content/dam/fourseasons/images/web/OAH/OAH_565_original.jpg"
        description="Join us in Ko Olina and find laid-back luxury at our beachfront Resort on Oahu's sunny western."
        button="VIEW PROPERTY" />
    </div>

  );
}

export default App;
