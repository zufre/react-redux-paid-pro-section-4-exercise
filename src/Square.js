import React from "react";
import PropTypes from "prop-types";
import "./Square.css";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: this.props.initialColor,
      initiallsHidden: false
    };
  }

  setCurrentColor(currentColor) {
    this.setState({
      currentColor
    });
  }
  toggleHidden() {
    this.setState(currentState => ({
      initiallsHidden: !currentState.initiallsHidden
    }));
  }

  render() {
    let textInput;
    const size = `${this.props.size}px`;
    const style = {
      width: size,
      height: size,
      backgroundColor: this.state.currentColor
    };
    return (
      <div>
        {!this.state.initiallsHidden ? (
          <div style={style} className="Square" />
        ) : null}

        <div className="SquareControls">
          <input
            ref={element => {
              textInput = element;
            }}
            type="text"
            placeholder="Color..."
          />
          <button
            onClick={() => {
              this.setCurrentColor(textInput.value);
            }}
          >
            Ok
          </button>
          <br />
          {this.state.initiallsHidden ? (
            <button
              onClick={() => {
                this.toggleHidden();
              }}
            >
              Show
            </button>
          ) : (
            <button
              onClick={() => {
                this.toggleHidden();
              }}
            >
              Hide
            </button>
          )}
        </div>
      </div>
    );
  }
}

Square.propTypes = {
  initialColor: PropTypes.string,
  size: PropTypes.number.isRequired
};

Square.defaultProps = {
  initialColor: "blue"
};
