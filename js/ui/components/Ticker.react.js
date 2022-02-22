const React = require('React');

// props:
// messages: Array of messages to try to display
//    messages can be either simple strings or jsx

const NUM_MESSAGES_TO_DISPLAY = 3;

class Ticker extends React.Component {

  render() {
    const {messages} = this.props;
    const toDisplay = [];
    const numMessagesToDisplay = Math.min(NUM_MESSAGES_TO_DISPLAY, messages.length);
    const len = Math.max(messages.length - numMessagesToDisplay, 0);
    for (let i = len; i < messages.length; i++) {
      let message = messages[i];
      // if (i == messages.length - 1) {
      //   message = '> ' + message;
      // }
      toDisplay.push(<div
        style={{
          overflow: 'hidden',
        }}
        key={'message_' + i}>{message}
      </div>);

    }
    return (
      <div className="ticker">
        {toDisplay}
      </div>
    );
  }
}

module.exports = Ticker;
