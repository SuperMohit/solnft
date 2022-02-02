import React, { useState } from "react";
import axios  from "axios";
const LastContent = ()=>{
    const data =[
        {
            id:0,  url:"https://static8.depositphotos.com/1222912/909/i/950/depositphotos_9092062-stock-photo-fantasy-world.jpg" , Firstline:"Solana Mystery Box Items",  Seacondline:"Solana Mystery Box enables merging special items from", Thirdline:"Mystery Boxes with the most popular Solana NFTs",Fourthline:"0.2 Total Volume"
        },{
            id:1,   url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPg6iCN3ZOmEwbeh8b3biZ5Xrv2ZBc1ttmg&usqp=CAU" ,  Firstline:"Solana Mystery Box Items",   Seacondline:"Solana Mystery Box enables merging special items from", Thirdline:"Mystery Boxes with the most popular Solana NFTs",Fourthline:"0.2 Total Volume"
        },{
            id:2,   url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWXlnubEoPMqKRLI7OQU_dQZBWPeZePmvf8A&usqp=CAU" ,  Firstline:"Solana Mystery Box Items",   Seacondline:"Solana Mystery Box enables merging special items from", Thirdline:"Mystery Boxes with the most popular Solana NFTs",Fourthline:"0.2 Total Volume"
        },{
            id:3,   url:"https://static8.depositphotos.com/1222912/909/i/950/depositphotos_9092062-stock-photo-fantasy-world.jpg" ,  Firstline:"Solana Mystery Box Items",   Seacondline:"Solana Mystery Box enables merging special items from", Thirdline:"Mystery Boxes with the most popular Solana NFTs",Fourthline:"0.2 Total Volume"
        },{
            id:4,   url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWXlnubEoPMqKRLI7OQU_dQZBWPeZePmvf8A&usqp=CAU" ,  Firstline:"Solana Mystery Box Items",   Seacondline:"Solana Mystery Box enables merging special items from", Thirdline:"Mystery Boxes with the most popular Solana NFTs",Fourthline:"0.2 Total Volume"
        }
    ]
    console.log(data);
    const [myArray]= useState(data);
    return(
        <>
        {
            myArray.map((curElm)=>{
               return <table>
                   <tr>
                       <td>
                       <div className="body">
        <div className="container">
            <div className="box">
            <img className="jj" src ={curElm.url} alt="random" ></img>
            <h1 className="cc">{curElm. Firstline}</h1>
            <h3 className="dd">{curElm. Seacondline}</h3>
            <h3 className="nn">{curElm.Thirdline}</h3>
            <h3 className="mm">{curElm.Fourthline}</h3>

            </div>
        </div>
    </div>
                       </td>
                       <td>
                       <div className="body">
        <div className="container" style={{marginLeft:"-750px"}}>
            <div className="box">
            <img className="jj" src ={curElm.url} alt="random" ></img>
            <h1 className="cc">{curElm. Firstline}</h1>
            <h3 className="dd">{curElm. Seacondline}</h3>
            <h3 className="nn">{curElm.Thirdline}</h3>
            <h3 className="mm">{curElm.Fourthline}</h3>

            </div>
        </div>
    </div>
                       </td>
                       <td>
                       <div className="body">
        <div className="container" style={{marginLeft:"-750px"}}>
            <div className="box">
            <img className="jj" src ={curElm.url} alt="random" ></img>
            <h1 className="cc">{curElm. Firstline}</h1>
            <h3 className="dd">{curElm. Seacondline}</h3>
            <h3 className="nn">{curElm.Thirdline}</h3>
            <h3 className="mm">{curElm.Fourthline}</h3>

            </div>
        </div>
    </div>
                       </td>
                       
                   </tr>
               </table>

            })
        }
        </>
    )
}
export default LastContent