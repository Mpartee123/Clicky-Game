import React from "react";

function ImageCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <span onClick={() => props.removeImage(props.id)} className="remove">
        𝘅
      </span>
        </div>
    );
}

export default ImageCard;
