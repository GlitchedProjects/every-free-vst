import Category from "../Components/Category";
import Header from "../Components/Header";
import vitalImg from "../assets/Synth_Images/Vital.png"
import hammerSmith from "../assets/Synth_Images/HammerSmith1.webp"


function Categories(){
    return(
        <>
            <Header
                headertitle="Every Free VST"
            />

            <div className="cat-container">
            <Category
                bgColor="hsl(250,50%,20%)"
                borderColor="hsl(250,50%,40%)"

                hoverBackgroundColor="hsl(250,50%,40%)"

                catimage={vitalImg}
                cattitle="Synth"
                catauthor="4 Synths"
                catdescription="All sorts of custom and emulated synthesizers"
                catlink="/Synth_VSTs"
            />
            <Category
                bgColor="hsl(250,10%,10%)"
                borderColor="hsl(250,10%,20%)"

                hoverBackgroundColor="hsl(250,10%,25%)"

                catimage={hammerSmith}
                cattitle="Piano"
                catauthor="1 Piano"
                catdescription="All sorts of custom and emulated pianos"
                catlink="/Piano_VSTs"
            />

            
        </div>
        </>
    );
}

export default Categories