import React, { useState } from "react";
const LastContent = ()=>{
    const data =[
       
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