const React = require('React');

const Button = require('./components/Button.react');
const Card = require('./components/Card.react');
const LabelledValue = require('./components/LabelledValue.react');
const RadioPicker = require('./components/RadioPicker.react');
const Slider = require('./components/Slider.react');
const Table = require('./components/Table.react');
const Ticker = require('./components/Ticker.react');

/**
 * {state: {...store.getState()}}
 * {props: {store}}
 */
class Game extends React.Component {

  constructor(props) {
    super(props);
    props.store.subscribe(() => {
      this.setState({...this.props.store.getState()});
    });
    this.state = {...this.props.store.getState()};
  }

  render() {
    const {dispatch} = this.props.store;
    const {state} = this;
    let content = (
      <React.Fragment>
        <Card>
          <LabelledValue label="Trash" value={state.trash.cur} />
          <LabelledValue label="Money" value={state.money.cur} />
          <LabelledValue label="Employees" value={state.employees.cur} />
        </Card>
        <Card>
        </Card>

        <Card>
          <Button label="Burn" onClick={() => dispatch({type: 'BURN'})} />
          <LabelledValue label="Burned" value={state.burn.cur} />
        </Card>
        <Card>
          <Button label="Recycle" onClick={() => dispatch({type: 'RECYCLE'})} />
          <LabelledValue label="Recycled" value={state.recycle.cur} />
        </Card>
      </React.Fragment>
    );



    return (
      <div className="background">
        {content}
      </div>
    );
  }
};

module.exports = Game;
