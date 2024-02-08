import React from "react";
import Card from "../../components/Card/Card";
import data from "../../assets/data/data.json"
import "./Works.css";

function Works() {
    const cardList = data.map((data) => (
        <Card key={data.id} data={data} />
    ));

    return (
        <section id="homeContent">
            <div id="cardList">
                {cardList}
            </div>
        </section>
    );
}

export default Works;