import React from 'react';

const card = (props) => {
    return (
    
        <div className="card">
            <div className="card-top">
                <h3 className="card-title">{props.title}</h3>
            </div>
            <div className="card-items">
                <p className="card-company">{props.company},</p>
                <p className="card-length">{props.length}</p>
                <hr className="card-line" />
            </div>
            <div className="card-descriptions">
                <ul>
                    <li className="card-description">{props.description[0]}</li>
                    <li className="card-description">{props.description[1]}</li>
                    <li className="card-description">{props.description[2]}</li>
                    <li className="card-description">{props.description[3]}</li>
                </ul>
            </div>
        </div>
    )
}

export default card
