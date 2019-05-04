import React from "react";
import "./style.css";



function ImageCard(props) {
    console.log(props);
    function checkForLoss()
    {
        if(props.clicked)
        {
            props.gameOver();
        } else {
            props.removeFriend(props.id)
        }
    }
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} onClick={() => {checkForLoss()}} className="remove" />
            </div>

        </div>
    );
}

export default ImageCard;
