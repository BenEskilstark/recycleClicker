const React = require('React');

const Button = require('./components/Button.react');
const Card = require('./components/Card.react');
const LabelledValue = require('./components/LabelledValue.react');
const RadioPicker = require('./components/RadioPicker.react');
const Slider = require('./components/Slider.react');
const Table = require('./components/Table.react');
const Ticker = require('./components/Ticker.react');

const {
  getDisplayMoney
} = require('../selectors/selectors.js');

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
          <LabelledValue label="Money" value={getDisplayMoney(state)} />
          <LabelledValue label="Employees" value={state.employees.cur} />
        </Card>
        <Card>
        </Card>

        <Card>
          <Button label="Burn" onClick={() => dispatch({type: 'BURN'})} />
          <LabelledValue label="Burned" value={state.burn.cur} />
          <LabelledValue label="Burners" value={state.employees.Burner.cur} />
          <Slider
            name={'Wage'}
            min={state.employees.Burner.minWage}
            max={state.employees.Burner.maxWage}
            value={state.employees.Burner.curWage}
            onChange={(wage) => dispatch({type: 'SET_WAGE', role: 'Burner', wage})}
          />
        </Card>
        <Card>
          <Button label="Recycle" onClick={() => dispatch({type: 'RECYCLE'})} />
          <LabelledValue label="Recycled" value={state.recycle.cur} />
        </Card>

        <Card>
          <Button
            label="Hire"
            onClick={() => dispatch({type: 'HIRE', role: state.ui.selectedRole})}
          />
          <RadioPicker
            options={state.employees.roleOptions}
            selected={state.ui.selectedRole}
            onChange={(role) => dispatch({type: 'SELECT_ROLE', role})}
          />
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
