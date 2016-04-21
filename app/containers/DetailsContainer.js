var React = require('react');
var Details = require('../components/Details');

var DetailsContainer = React.createClass({
    render() {
        console.log(this.props.location.state.weather);
        return (
            <Details />
        )
    }
});
        
module.exports = DetailsContainer;