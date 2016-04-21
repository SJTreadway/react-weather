var React = require('react');
var PropTypes = React.PropTypes;

function Button(props) {
  return (
    <button
      type="button"
      style={{margin: 10}}
      onClick={props.onSubmitCity}
      className="btn btn-success">
      {props.children}
    </button>
  )
}

function InputField(props) {
  return (
    <input
      type="text"
      className="form-control"
      onChange={props.onUpdateCity}
      value={props.city}
      placeholder="Tuscaloosa, AL" />
  )
}

function getStyles(props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function GetCity(props) {
  return(
    <div style={getStyles(props)}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCity={props.onSubmitCity}>
        Get Weather
      </Button>
    </div>
  )
}

GetCity.propTypes = {
  direction: PropTypes.string,
  city: PropTypes.string.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired
};

module.exports = GetCity;
