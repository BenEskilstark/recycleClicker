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
        <Ticker messages={state.ticker.messages} />
        <Card>
          <LabelledValue label="Trash" value={state.trash.cur} />
          <LabelledValue label="Money" value={getDisplayMoney(state)} />
          <LabelledValue
            label="Contractors"
            value={state.employees.Recycler.cur + state.employees.Burner.cur}
          />
          <LabelledValue
            label="Employees"
            value={
              state.employees.Manager.cur + state.employees.Recruiter.cur +
              state.employees.Scientist.cur + state.employees.Lawyer.cur
            }
          />
        </Card>
        <Card>
        </Card>

        <Card>
          <Button label="Burn" onClick={() => dispatch({type: 'BURN', num: 1})} />
          <LabelledValue label="Burned" value={state.burn.cur} />
          <LabelledValue label="Burners" value={state.employees.Burner.cur} />
        </Card>
        <Card>
          <Button label="Recycle" onClick={() => dispatch({type: 'RECYCLE', num: 1})} />
          <LabelledValue label="Recycled" value={state.recycle.cur} />
          <LabelledValue label="Recyclers" value={state.employees.Recycler.cur} />
        </Card>

        <Card>
          <Button
            label="Hire"
            onClick={() => dispatch({type: 'HIRE', num: 1})}
          />
          <RadioPicker
            options={state.employees.roleOptions}
            selected={state.ui.selectedRole}
            onChange={(role) => dispatch({type: 'SELECT_ROLE', role})}
          />
          <LabelledValue label="Recruiters" value={state.employees.Recruiter.cur} />
        </Card>
        <Card>
          <Button label="Pay" onClick={() => dispatch({type: 'PAY', num: 1})} />
          <LabelledValue label="Managers" value={state.employees.Manager.cur} />
          <LabelledValue
            label="Contractors to pay"
            value={state.employees.contractor.needPay}
          />
          <LabelledValue
            label="Contrs. about to quit"
            value={state.employees.contractor.aboutToLeave}
          />
          <LabelledValue
            label="Employees to pay"
            value={state.employees.employee.needPay}
          />
          <LabelledValue
            label="Empls. about to quit"
            value={state.employees.employee.aboutToLeave}
          />
        </Card>

        <Card>
          <Button
            label="Research"
            onClick={() => dispatch({type: 'RESEARCH', num: 1})}
          />
          <LabelledValue label="Scientists" value={state.employees.Scientist.cur} />
        </Card>
        <Card>
          <Button
            label="Lobby"
            onClick={() => dispatch({type: 'LOBBY', num: 1})}
          />
          <LabelledValue label="Lawyers" value={state.employees.Lawyer.cur} />
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
