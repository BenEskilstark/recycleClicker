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
          <LabelledValue label="Recyclers" value={state.employees.Recycler.cur} />
          <Slider
            name={'Wage'}
            min={state.employees.Recycler.minWage}
            max={state.employees.Recycler.maxWage}
            value={state.employees.Recycler.curWage}
            onChange={(wage) => dispatch({type: 'SET_WAGE', role: 'Recycler', wage})}
          />
        </Card>

        <Card>
          <Button
            label="Hire"
            onClick={() => dispatch({type: 'HIRE'})}
          />
          <RadioPicker
            options={state.employees.roleOptions}
            selected={state.ui.selectedRole}
            onChange={(role) => dispatch({type: 'SELECT_ROLE', role})}
          />
          <LabelledValue label="Recruiters" value={state.employees.Recruiter.cur} />
          <Slider
            name={'Wage'}
            min={state.employees.Recruiter.minWage}
            max={state.employees.Recruiter.maxWage}
            value={state.employees.Recruiter.curWage}
            onChange={(wage) => dispatch({type: 'SET_WAGE', role: 'Recruiter', wage})}
          />
        </Card>
        <Card>
          <Button
            label="Pay Employees"
            onClick={() => dispatch({type: 'PAY'})}
          />
          <LabelledValue label="Managers" value={state.employees.Manager.cur} />
          <Slider
            name={'Wage'}
            min={state.employees.Manager.minWage}
            max={state.employees.Manager.maxWage}
            value={state.employees.Manager.curWage}
            onChange={(wage) => dispatch({type: 'SET_WAGE', role: 'Manager', wage})}
          />
        </Card>

        <Card>
          <Button
            label="Research"
            onClick={() => dispatch({type: 'RESEARCH'})}
          />
          <LabelledValue label="Scientists" value={state.employees.Scientist.cur} />
          <Slider
            name={'Wage'}
            min={state.employees.Scientist.minWage}
            max={state.employees.Scientist.maxWage}
            value={state.employees.Scientist.curWage}
            onChange={(wage) => dispatch({type: 'SET_WAGE', role: 'Scientist', wage})}
          />
        </Card>
        <Card>
          <Button
            label="Lobby"
            onClick={() => dispatch({type: 'LOBBY'})}
          />
          <LabelledValue label="Lawyers" value={state.employees.Lawyer.cur} />
          <Slider
            name={'Wage'}
            min={state.employees.Lawyer.minWage}
            max={state.employees.Lawyer.maxWage}
            value={state.employees.Lawyer.curWage}
            onChange={(wage) => dispatch({type: 'SET_WAGE', role: 'Lawyer', wage})}
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
