import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="api_id" placeholder="API Key..." />
        <br />
        <input type="text" name="city" placeholder="city..." />
        <input type="text" name="country" placeholder="country..." />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Form;
