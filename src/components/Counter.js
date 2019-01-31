import React from "react";
const  styles = {
  card: {
    height: "100px",
    width: "100px"
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
    return (
      <div>
      <div className="card text-center">

        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
      </div>

      <div className="card">
  <img className="card-img-top" style={styles.card} src="data:image/png;base64,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" alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>

      
    );
  }
}

export default Counter;
