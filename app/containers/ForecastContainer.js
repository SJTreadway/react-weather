var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');
var helpers = require('../helpers/api');

var ForecastContainer = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            isLoading: true,
            forecastData: {}
        }
    },
    componentDidMount() {
        this.makeRequest(this.props.routeParams.city);
    },
    componentWillReceiveProps(nextProps) {
        this.makeRequest(nextProps.routeParams.city);
    },
    makeRequest(city) {
        helpers.getForecast(city)
            .then((forecastData) => {
            this.setState({
                isLoading: false,
                forecastData: forecastData
            });
        });
    },
    handleClick(weather) {
        this.context.router.push({
          pathname: '/detail/' + this.props.routeParams.city,
          state: {
            weather: weather
          }
        })
    },
    render() {
        return (
            <Forecast
                city={this.props.routeParams.city}
                isLoading={this.state.isLoading}
                forecastData={this.state.forecastData}
                handleClick={this.handleClick} />
        )
    }
});

module.exports = ForecastContainer;
