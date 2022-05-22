import React from "react";
import "./cards.css";
import axios from "axios";

function Card(props){
    console.log(props);
     return(
        <div  className="card">
                  <img className="imgRes" src={props.item.avatar_url} alt="..."/>
                  <div className="caption">
                      <h5>{props.item.login}</h5>
                      <div className="email">{props.item.login}_{props.item.id}@email.com</div>
                      <div ><b>GDELT</b></div>
                      <footer>
                          <button className="btn btn-default text-left" > 
                          Following
                          </button>
                          <button className="btn btn-default" > 
                          Followers
                          </button>
                      </footer>
                  </div>
              </div>
      )
  }
  
  function Cards (props) {
   console.log(props);
   const list=  Object.keys(props.data).map((list)=>{          
      let setItem={
        login:props.data[list].GoldsteinScale,
        id:props.data[list]._id,
        avatar_url:props.data[list].Info.og.image
      };
      
     return <Card key={props.data[list].id} item={setItem}/>
    });  
    return (<div className="Cards">{list}</div>);
  }
  
  class NFT extends React.Component {
     constructor(props) {
      super(props);
      this.state={
      nft:'',
        length:0
    };
     }
    componentDidMount(){
        axios.get('https://us-east-1.aws.data.mongodb-api.com/app/saviour-ui-avjoa/endpoint/latest')
        .then(response => {      
          console.log(response.data) 
          this.setState({ nft: response.data,length:response.data.length });
        })
        .catch(function (error) {
          //console.log("err"+" "+error);
        })
      }
    render() {
  
      return (
        <div className="container-fluid">
      <div className="row">
          <div className="col-sm-12 col-md-12 ">  
        {this.state.length>0?(<Cards  data={this.state.nft}/>):''}      
          </div>
      </div>
  </div>
      );
    }
  }

  export default NFT;
  