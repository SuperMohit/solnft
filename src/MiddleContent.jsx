import React, { useState } from "react";
const MiddleContent = ()=>{
    const data =[
        {
            id:0,  url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqt8PYs6XbwU7Kl2lKoS8DhNHx7JmJZk6bTQ&usqp=CAU" , Firstline:"Degenerate Ape Academy",  Seacondline:"5.1k"
        },{
            id:1,  url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqt8PYs6XbwU7Kl2lKoS8DhNHx7JmJZk6bTQ&usqp=CAU" , Firstline:"Degenerate Ape Academy",  Seacondline:"5.1k"
        }
    ]
    console.log(data);
    const [myArray]= useState(data);

    function details(id) {
        console.log("calling")
        console.log(id);
    }

    return(
        <>
        {
            myArray.map((curElm)=>{
               return  <table >
            <tr class="nb" onClick={() => details(curElm.id)}>
               <td><img class="op2"  src ={curElm.url} alt="random" ></img></td>
               <td><h1 class="ki"style={{marginLeft:"10px"}} >{curElm.Firstline}</h1></td>
               <td><h2 className="li">{curElm.Seacondline}</h2></td>
               <td><img class="op2"  src ={curElm.url} alt="random" ></img></td>
               <td><h1 class="ki"style={{marginLeft:"10px"}} >{curElm.Firstline}</h1></td>
               <td><h2 className="li">{curElm.Seacondline}</h2></td>
               <td><img class="op2"  src ={curElm.url} alt="random" ></img></td>
               <td><h1 class="ki"style={{marginLeft:"10px"}} >{curElm.Firstline}</h1></td>
               <td><h2 className="li">{curElm.Seacondline}</h2></td>
               <td><img class="op2"  src ={curElm.url} alt="random" ></img></td>
               <td><h1 class="ki"style={{marginLeft:"10px"}} >{curElm.Firstline}</h1></td>
               <td><h2 className="li">{curElm.Seacondline}</h2></td>
           </tr>
           </table>
                      
            })
        }
         </> 
    )
}
export default MiddleContent