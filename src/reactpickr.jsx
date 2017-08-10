import React from "react";
import PropTypes from "prop-types";
import {getDaysinMonth} from "./utils";

const weekDayNames = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun",
]

const MONTH_NAMES = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

class Days extends React.Component{
	static propTypes = {
		currentYear: PropTypes.number.isRequired,
		currentMonth: PropTypes.number.isRequired,
		onSelection: PropTypes.func.isRequired,
	}

	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(event){
		this.props.onSelection(event.target.dataset.date);
	}

	enumerateDays(){
		const firstOfMonth = (new Date(this.props.currentYear, this.props.currentMonth, 1).getDay() - 0 + 7 ) % 7;
		const daysInMonth = getDaysinMonth((this.props.currentMonth - 1 + 12) % 12, this.props.currentYear);
		let prevMonthDays = getDaysinMonth((this.props.currentMonth - 1 + 12) % 12, this.props.currentYear);
		let	dayNumber = self.prevMonthDays + 1 - firstOfMonth;
		let dayIndex = 0;
		// const isRangeMode = self.config.mode === "range";

		let days = [];
		for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
			let date = new Date(self.currentYear, self.currentMonth, dayNumber);
			days.push(
				<span className="flatpickr-day prevMonthDay" 
					key={date.toUTCString()}
					data-date={date}
					onClick={this.onClick}
					tabindex="-1">
					{dayNumber}
				</span>
			);
		}
		for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
			let date = new Date(self.currentYear, self.currentMonth, dayNumber);
			days.push(
				<span className="flatpickr-day"
					key={date.toUTCString()}
					data-date={date}
					onClick={this.onClick}
					tabindex="-1">
					{dayNumber}
				</span>
			);
		}
		return days;
	}

	render(){
		return(
			<div className="dayContainer">
				{this.enumerateDays()}
			</div>
		)
	}
}

class Weekdays extends React.Component{
	enumerateWeekdays(){
		return weekDayNames.map(name => {
			return (
				<span className="flatpickr-weekday">
					{name}
				</span>
			);
		});
	}

	render(){
		return (
			<div className="flatpickr-weekdays">
				this.enumerateWeekdays();
			</div>
		);
	}
}


/* This is NOT: 
	inline picker
	time picker
*/

export default class ReactPickr extends react.Component{
	static propTypes = {
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

		this.handleDaySelection = this.handleDaySelection.bind(this);
		this.handleMonthSelection = this.handleMonthSelection.bind(this);
	}
	


	handleDaySelection(selectedDate){
		this.setState(
			{
				currentMonth: selectedDate.getMonth(),
				currentYear: selectedDate.getFullYear(),
				currentDay: selectedDate.getDate(),
			}
		)
	}
	

	handleDaySelection(selectedDate){
		this.setState(
			{
				currentMonth: selectedDate.getMonth(),
				currentYear: selectedDate.getFullYear(),
				currentDay: selectedDate.getDate(),
			}
		)
	}

	render(){
		let monthName = "June";
		return(
			<div>
				<input className="flatpickr flatpickr-input active" type="text" placeholder="Select Date.." readonly="readonly" />
				<div className="flatpickr-calendar animate arrowTop open" tabindex="-1" style="top: 503.5px; left: 636.5px; right: auto;">
					<div className="flatpickr-month">
						<span className="flatpickr-prev-month" 
							style="display: block;"
							onClick={this.handleMonthSelection}>
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
								<g></g>
								<path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"></path>
							</svg>
						</span>
						<span className="flatpickr-current-month">
							<span className="cur-month" title="Scroll to increment">{MONTH_NAMES[this.state.currentMonth-1]}</span>
							<div className="numInputWrapper">
								<input className="numInput cur-year" type="text" pattern="\d*" title="Scroll to increment" />
								<span className="arrowUp"/>
								<span className="arrowDown"/>
							</div>
						</span>
						<span className="flatpickr-next-month" style="display: block;">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
								<g></g>
								<path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path>
							</svg>
						</span>
					</div>
					<div className="flatpickr-innerContainer">
						<div className="flatpickr-rContainer">
							<Weekdays/>
						</div>
						<div className="flatpickr-days" tabindex="-1">
							<Days currentYear={this.state.currentYear}
								currentMonth={this.state.currentMonth}
								onSelection={this.handleDaySelection} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}