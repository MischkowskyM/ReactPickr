import React from "react";
import PropTypes from "prop-types";
import l10n from "../l10n/default";
import Days from "./Days"
import Weekdays from "./Weekdays";
import YearControl from "./YearControl";

export default class Calendar extends React.Component{
	constructor(props){
		super(props);
		let value = this.props.currentDate || new Date();
		this.state= {
			currentDate: this.props.currentDate,
			currentMonth: value.getMonth(),
			currentYear: value.getFullYear(),
			currentDay: value.getDate(),
		}

		this.handleDaySelection = this.handleDaySelection.bind(this);
	}

	updateState(date){
		this.setState(
		{
			currentDate: date,
			currentMonth: date.getMonth(),
			currentYear: date.getFullYear(),
		}, () => this.props.onDateChange(date));
	}

	handleDaySelection(selectedDate){
		this.updateState(new Date(Number(selectedDate)));
	}
	
	decreaseMonth = () => {
		let newDate = new Date(this.state.currentYear, this.state.currentMonth -1, 1);
		this.setState(
		{
			...this.state,
			currentMonth: newDate.getMonth(),
			currentYear: newDate.getFullYear(),
		});
	}

	increaseMonth = () => {
		let newDate = new Date(this.state.currentYear, this.state.currentMonth +1, 1);
		this.setState(
		{
			...this.state,
			currentMonth: newDate.getMonth(),
			currentYear: newDate.getFullYear(),
		});
	}

	onMonthScroll = (event) => {
		if (event.deltaY < 0){
			this.increaseMonth();
		}else{
			this.decreaseMonth();
		}
	}

	updateYear = (value) => {
		this.setState(
		{
			...this.state,
			currentYear: value,
		});
	}

	render(){
		if (!this.props.expand){
			return null;
		}
		return(
			<div className="flatpickr-calendar animate arrowTop open" tabIndex="0" onBlur={ this.props.collapse } >
				<div className="flatpickr-month">
					<span className="flatpickr-prev-month" onClick={this.decreaseMonth}>
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
							<g></g>
							<path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"></path>
						</svg>
					</span>
					<span className="flatpickr-current-month">
						<span className="cur-month" title={l10n.scrollTitle} onWheel={this.onMonthScroll}>
							{l10n.months.longhand[this.state.currentMonth]}
						</span>
						<YearControl value={this.state.currentYear} onYearChange={this.updateYear}/>
					</span>
					<span className="flatpickr-next-month" onClick={this.increaseMonth}>
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
							<g></g>
							<path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path>
						</svg>
					</span>
				</div>
				<div className="flatpickr-innerContainer">
					<div className="flatpickr-rContainer">
						<Weekdays/>
						<Days 
							date={this.state.currentDate}
							currentYear={this.state.currentYear}
							currentMonth={this.state.currentMonth}
							onSelection={this.handleDaySelection} />
					</div>
				</div>
			</div>
		)
	}
}