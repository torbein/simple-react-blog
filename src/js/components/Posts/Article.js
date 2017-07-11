import React from "react";

export default class Article extends React.Component {


    render() {
        return(
            <div>
                <div className="col-sm-4">
                    <h1>{this.props.title}</h1>
                    <p>
                        Craft beer cred scenester messenger bag, coloring book kale chips venmo whatever church-key gentrify YOLO gastropub meditation locavore. Post-ironic chillwave vape, health goth dreamcatcher vegan narwhal hexagon fingerstache quinoa shaman. Brooklyn leggings fam sriracha. Waistcoat organic godard etsy yr small batch roof party, viral banh mi tattooed seitan actually fam brunch. Street art pok pok kickstarter bushwick sartorial umami. Next level lo-fi meh, af synth portland gastropub. Freegan tumblr shabby chic sartorial tacos pug aesthetic ugh fashion axe adaptogen synth forage kogi taiyaki. Butcher cronut hashtag tousled man braid. Cornhole vice fingerstache, drinking vinegar vegan organic roof party beard tumeric portland meggings +1. Cloud bread food truck brooklyn keytar bushwick flexitarian air plant.
                    </p>
                </div>
            </div>
        );
    }
}