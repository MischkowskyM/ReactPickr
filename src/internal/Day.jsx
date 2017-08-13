import React from "react";
import PropTypes from "prop-types";

export default class Day extends React.Component{
	static propTypes = {
		date: PropTypes.instanceOf(Date),
		selected: PropTypes.bool,
		onClick: PropTypes.func,
	}

	render(){
		const {date, selected, onClick, type} = this.props;
		const today = new Date(Date.now());
		let additionalClasses = "";
		// call setHours to take the time out of the comparison
		if(date.setHours(0,0,0,0) === today.setHours(0,0,0,0)) {
			additionalClasses += "today ";
		}
		if (selected ){
			additionalClasses += "selected ";
		}
		if (type){
			additionalClasses += type;
		}
				
		return(
			<span className={"flatpickr-day "+ additionalClasses}
				key={date.toUTCString()}
				data-date={date.getTime()}
				onClick={onClick}
				tabIndex="-1">
				{date.getDate()}
			</span>
		);
	}
}