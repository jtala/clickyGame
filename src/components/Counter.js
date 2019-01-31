import React from "react";
const  styles = {
  icons: {
    height: "100px",
    width: "100px",
    margin: "30px"
  }
}

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };


  handleIncrement = ()=>{

    this.setState({
      count: this.state.count + 1
    })

  };


  
  // The render method returns the JSX that should be rendered
  render() {
    let numbers = [1,2,3,4,5];
    let images = numbers.map(image =>{

      return <img key={image} style={styles.icons} src={require(`./imgs/${image}.png`)} alt="hi" onClick={this.handleIncrement}/>
    })
    return (
      <div>
      <div className="card text-center">

        <div className="card-header bg-primary text-white">
        Remember the buttons that you haven't pressed.
        </div>
        <div className="card-body">
          <p className="card-text">Point Counter {this.state.count}</p>
        </div>
      </div>

      <div className="icons">{images}
      </div>
      
      </div>

      
    );
  }
}

export default Counter;
