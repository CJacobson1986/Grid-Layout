/**
*
* Grid
*
*/


import React from 'react';


import './style.css';
import './styleM.css';



export default class Grid extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      images: ['alcovewaterfall.jpg','Ashvillewaterfall.jpg','bluewaterfall.jpg','bumpywaterfall.jpg','cliffwaterfall.jpg','tsunami.jpg','waterfallBGfucia.jpg','purplewaterfall.jpg',],
      Username: "",
      backgroundColor: "blue"
    }

  }
  inputUsername = (event) => {
    this.setState({
    Username:event.target.value
    })
    console.log(Username);
  }

  storeData = (color) => {
    console.log (color);
  }

  changeColor=(color) => {
    this.setState({
      backgroundColor:color
    })
  }

  render() {



    return (
      <div style={{background:this.state.backgroundColor}}>
        <div className="grid">
          {this.state.images.map((image,index) =>(
            <div className= "gridItem" key={index}>
              <img src={require('../../images/'+image)}
                className="gridImage" />
            </div>
          ))}

        </div>
        <input type="password" onChange={this.inputUsername} placeholder="Username"/>
        <input type="submit"  onClick={()=> this.changeColor("red")} value="Angry"/>
        <input type="submit" onClick={()=> this.changeColor("blue")} value="Peaceful"/>
        <input type="submit" onClick={()=> this.changeColor("black")} value="Sad"/>

      </div>

    );
  }

}

Grid.contextTypes = {
  router: React.PropTypes.object
};
