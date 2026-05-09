import { Link } from "react-router-dom";

function Card(props){
    return(
        <Link className="card" to={props.link}
        style={{
            "--cbg": props.cardColor,
            "--cbc": props.cardBorderColor,
            "--chbg": props.cardHoverColor
        }}>
            <div className="card-items">
                <img className="card-image" src={props.image} alt="Synth Image"></img>

                <div className="card-info">
                    <h2 className="card-title"> {props.title} </h2>
                    <h3 className="card-author"> {props.author} </h3>
                    <p className="card-description"> {props.description} </p>
                </div>
            </div>
        </Link>
    );
}

export default Card