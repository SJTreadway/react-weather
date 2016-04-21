var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var helpers = require('../helpers/api');

var GetCityContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
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
  handleSubmitCity(e) {
    e.preventDefault();
    this.context.router.push('/forecast/' + this.state.city);
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
