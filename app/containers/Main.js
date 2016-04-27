var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');
var Router = require('react-router');
var Link = Router.Link;

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'slategray',
    color: '#fff',
    padding: 5,
  },
  image: {
    height: "4%",
    width: "4%"
  },
  title: {
    color: "#fff",
    textDecoration: "none"
  }
}

var Main = React.createClass({
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                  <Link to={'/'} style={styles.title}>
                    <h1>Weather App</h1>
                  </Link>
                  <img
                    style={styles.image}
                    src={require("../images/react.svg")} />
                  <GetCityContainer direction="row"/>
                </div>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;
