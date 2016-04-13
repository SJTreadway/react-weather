var React = require('react');
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
  getDefaultProps() {
    return {
      direction: 'column'
    }
  },
  getInitialState() {
    return {
      city: ''
    }
  },
  handleUpdateCity(e) {
    this.setState({
      city: e.target.value
    })
  },
  handleSubmitCity() {
    console.log(this.state.city)
  },
  render() {
    return (
      <GetCity
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        city={this.state.city}
        direction={this.props.direction} />
    )
  }
});

module.exports = GetCityContainer;
