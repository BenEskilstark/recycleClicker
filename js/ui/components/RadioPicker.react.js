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
        <input type="radio"
          name={'hello'}
          key={'radio_option_'+ option}
          value={option}
          checked={option === selected}
        >
          {option}
        </input>
      );
    }

    return (
      <div>
        {options}
      </div>
    );
  }
}

module.exports = Button;
