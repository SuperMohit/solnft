
import React from "react";
import "./App.css";

const iframe = "<iframe style='background: #040A58;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);' width='720' height='480' src='https://charts.mongodb.com/charts-project-0-laewp/embed/charts?id=6272c0d3-b5d9-4d56-8679-d9af255c76d6&maxDataAge=3600&theme=light&autoRefresh=true'></iframe>"

function MapComponent(){
    return <div className="row-map">
    <div className="block-map" style={{"vertical-align":"middle"}} dangerouslySetInnerHTML={ createMarkup()} />
   <div className="block-map-text">
    <p>
    <h1>What is Saviour?</h1>
Saviour exploits the power of GDELT dataset and Web3/Solana to give people the means to raise funds, help others overcome hardship and meet aspirational goals. With crowdfunding, you can help a friend or an entire community. You can do anything from paying for your own operation to fulfilling a student’s dream of going to university – and so much more.

If you’ve ever found yourself wondering, “What exactly is crowdfunding?” or “What are the benefits of crowdfunding?”, then read on! We’ll answer your questions about crowdfunding and give you tips on how to bring in donations.

    </p>
   
 
 </div>
  </div>
} 

function createMarkup() {
    return {__html: iframe};
  }


export default MapComponent;


