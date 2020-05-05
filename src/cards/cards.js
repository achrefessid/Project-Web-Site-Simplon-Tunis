import React from 'react';
const cards = [
    {
        title: "Nos Valeurs",
        img: "1.png",
        text: " Nous nous appuyons sur 3 valeurs fortes, qui sont au fondement des actions que nous portons au quotidin La solidarité: notre ancrage dans l’ESS et la priorité donnée à l’inclusion des plus démunis ne sera jamais remis en cause L’ambition:l’esprit start up qui nous habite ... Sky is the limit! L’audace/ L’innovation: Nous savons forcer les verrous et bousculer les systèmes établis pour gagner en efficacité dans notre recherche de l’impact social."



    },
    {
        title: "Notre vision",
        img: "3.png",
        text:
            "Nous croyons en la force de nos partenariats et notre ambition et de continuer à développer ​une organisation agile et efficace travaillant avec les territoires et les écosystèmes locaux pour déployer​ un réseau de 100 fabriques et former​ 2000 personnes par an en France et à l’international ​à l’horizon 2020.Nous souhaitons faire de ​Simplon.co la première licorne de l’ESS, une startup sociale au​ modèle d’entreprise original, inspirant et exemplaire​",
    },
];

function Cards() {
    return (
        <div className="card">
            {cards.map((card) => (
                <div>
                    <center> <img className="photo-card" src={card.img} style={{}}></img></center>
                    <center> <h2>{card.title}</h2> </center>
                    <center> <p className="card-text">{card.text}</p> </center>
                </div>
            ))
            }
        </div >

    )
}
export default Cards;