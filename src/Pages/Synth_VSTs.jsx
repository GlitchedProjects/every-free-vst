import Header from "../Components/Header.jsx"
import Card from "../Components/Card.jsx"
import synth1Img from "../assets/Synth_Images/synth1.png"
import vitalImg from "../assets/Synth_Images/Vital.png"
import surgeImg from "../assets/Synth_Images/SurgeXT.png"
import odin2Img from "../assets/Synth_Images/Odin2.png"

function Synth_Catagory(){
    return(
      <>
      <Header
        headertitle="Synths"
      />

      <div className="card-container">
        <Card 
        cardColor="hsl(250,50%,20%)"
        cardBorderColor="hsl(250,50%,40%)"
        cardHoverColor="hsl(250,50%,40%)"

        image={synth1Img}
        title="Synth1"
        author="daichi"
        description="Synth1 in one of the oldest synth VSTs"
        link="https://daichilab.sakura.ne.jp/softsynth/index.html"
        />

        <Card
        cardColor="hsl(250,50%,20%)"
        cardBorderColor="hsl(250,50%,40%)"
        cardHoverColor="hsl(250,50%,40%)"

        image={vitalImg}
        title="Vital"
        author="Vital Audio"
        description="In depth wavetable synth VST"
        link="https://vital.audio/"
        />

        <Card
        cardColor="hsl(250,50%,20%)"
        cardBorderColor="hsl(250,50%,40%)"
        cardHoverColor="hsl(250,50%,40%)"

        image={surgeImg}
        title="Surge"
        author="Surge Synth Team"
        description="The most used, and considered an essential free synth VST"
        link="https://surge-synthesizer.github.io/"
        />

        <Card
        cardColor="hsl(250,50%,20%)"
        cardBorderColor="hsl(250,50%,40%)"
        cardHoverColor="hsl(250,50%,40%)"

        image={odin2Img}
        title="Odin 2"
        author="Wave Warden"
        description="A simple modular synth with 9 slots"
        link="https://thewavewarden.com/pages/odin-2"
        />

       </div> 

      </>
    )
}    

export default Synth_Catagory