import React from "react";
import PropTypes from "prop-types";
import Calendar from "./internal/Calendar"
import "./reactpickr.css";

export default class ReactPickr extends React.Component{
	static propTypes = {
		placeholder: PropTypes.string,
		enableTime: PropTypes.bool,
		// TODO: Accept unix timestamps, ISO date strings, strings of format "YYYY-MM-DD HH:MM", "today"
		defaultDate: PropTypes.instanceOf(Date),
		minDate: PropTypes.instanceOf(Date),
		maxDate: PropTypes.instanceOf(Date),
		dateFormat: PropTypes.string,
		// TODO: enable, disable
	};

	static defaultProps = {
		enableTime: false,
	};

	constructor(props){
		super(props);
		this.state = {
			calendarOpen: false,
			pickedDate: "",
		}
	}

	openCalendar = () => {
		this.setState({calendarOpen: true});
	}
	closeCalendar = () => {
	//	this.setState({calendarOpen: false});
	}
	handleDateChange = (date)=>{
		this.setState({
			calendarOpen: false,
			value: date,
		});
	}

	render(){
		return(
			<div>
				<input className="flatpickr flatpickr-input active" 
					onClick={this.openCalendar}
					onBlur={this.closeCalendar}
					type="text"
					placeholder={this.props.placeholder}
					value={this.state.value ? this.state.value.toString() : ""}
					readOnly={true} />
				{ this.state.calendarOpen && <Calendar {...this.props} currentDate={this.state.value} onDateChange={this.handleDateChange}/> }
			</div>
		)
	}
}