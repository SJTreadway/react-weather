var React = require('react');
var Details = require('../components/Details');

var DetailsContainer = React.createClass({
    render() {
        return (
            <Details
              weather={this.props.location.state.weather}
              city={this.props.routeParams.city} />
        )
    }
});

module.exports = DetailsContainer;
