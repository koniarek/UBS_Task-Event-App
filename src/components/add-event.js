import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { addEvent } from "../actions/events";
import { Link } from "react-router-dom";
import FormContainer from "./containers/FormContainer";


class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	      initialValues: {
		      title: '',
		      description: '',
		      category: '',
		      paid_event: '',
		      event_fee: '',
		      reward: '',
		      date: '',
		      date_format: '',
		      duration: '',

		      coordinator: {
			      responsible: '',
			      coordinator_email: ''
		      },
		      categoryOptions:[],
		      paid_eventOptions: [],
		      coordinatorOptions: [],
		      formatOptions:[]
      }
    };
  }
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <Link to="/" className="back-button">
            &larr;
          </Link>
          Add Event
        </div>
        <div className="page-content event-form-wrapper">
          <EventForm
            submitFormContainer={this.props.addEvent}
            initialValues={this.state.initialValues}
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addEvent }, dispatch);
}

AddEvent.ProtoTypes = {
  addEvent: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEvent);
