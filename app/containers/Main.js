var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'royalblue',
    color: '#fff',
    padding: 5,
  },
  image: {
    height: "4%",
    width: "4%"
  }
}

var Main = React.createClass({
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                  <h1>Weather App</h1>
                  <img
                    style={styles.image}
                    src="app/images/react.svg" />
                  <GetCityContainer direction="row"/>
                </div>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;
