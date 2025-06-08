import React, { Component } from "react";
import Update from "./Updatehoc";


   
class Events extends Component {
  render() {
    const { R, count, INC, name } = this.props;
    return (
        <div style={R}>
        {count > 0 && (
          <p>
            Count: {count} {name}
          </p>
        )}
        <button onClick={INC}>Click</button>
      </div>
    );
  }
}

export default Update(Events);