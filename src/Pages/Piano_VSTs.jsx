import Header from "../Components/Header.jsx";
import Card from "../Components/Card.jsx"
import hammerSmith from "../assets/Synth_Images/HammerSmith1.webp"

function Piano_Category(){
    return(
        <>
            <Header headertitle="Piano"/>
        
        <div className="card-container">

            <Card
                cardColor="hsl(0,0%,10%)"
                cardBorderColor="hsl(0,0%,20%)"
                cardHoverColor="hsl(0,0%,20%)"

                image={hammerSmith}
                title="HAMMERSMITH FREE"
                author="Donna"
                description="First piano"
                link="https://www.audiopluginsforfree.com/hammersmith-free/"
            />

        </div>
        </>
    );
}

export default Piano_Category