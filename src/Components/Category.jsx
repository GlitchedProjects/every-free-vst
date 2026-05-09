import { Link } from "react-router-dom";

function Category(props){
    return(
            <Link className="categories" to={props.catlink} 
            style={{
                 "--bg": props.bgColor,
                "--bc": props.borderColor,
                "--hbg": props.hoverBackgroundColor}}>

                <div className="cat-items">
                    <img className="cat-image" src={props.catimage} alt="Synth Image"></img>
    
                    <div className="cat-info">
                        <h2 className="cat-title"> {props.cattitle} </h2>
                        <h3 className="cat-author"> {props.catauthor} </h3>
                        <p className="cat-description"> {props.catdescription} </p>
                    </div>
                </div>
            </Link>
        );
}

export default Category