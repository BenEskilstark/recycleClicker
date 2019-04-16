const React = require('React');

// props:
// options: Array<string>
// selected: string
// onChange: (option) => void

class Button extends React.Component {

  render() {
    const optionToggles = [];
    for (const option of this.props.options) {
      optionToggles.push(
        <React.Fragment>
          {option}
          <input type="radio"
            key={'radio_option_'+ option}
            value={option}
            checked={option === this.props.selected}
            onChange={() => this.props.onChange(option)}
          />
        </React.Fragment>
      );
    }

    return (
      <div>
        {optionToggles}
      </div>
    );
  }
}

module.exports = Button;
