const React = require('react');
const Details = require('../components/Details');

const DetailsContainer = React.createClass({
    render() {
        return (
            <Details
              weather={this.props.location.state.weather}
              city={this.props.routeParams.city} />
        )
    }
});

module.exports = DetailsContainer;
