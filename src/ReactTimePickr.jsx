import React from "react";
import PropTypes from "prop-types";
import l10n from "./l10n/default";

export default class ReactTimePickr extends React.Component{

	static propTypes = {
		enableSeconds: PropTypes.bool,
		time24hour: PropTypes.bool,
		defaultHour: PropTypes.number,
    	defaultMinute: PropTypes.number,
	}

	static defaultProps = {
		enableSeconds: false,
		time24hour: false,
		defaultHour: 12,
		defaultMinute: 0, 
	}

	constructor(props){
		super(props);
		this.state = {
			hour: this.props.defaultHour,
			minute: this.props.defaultMinute
		}
	}

	increaseHour = () => {
		let hour = this.state.hour + 1;
		if (hour === 24){
			hour = 0;
		}
		this.setState({...this.state, hour: hour});
	}

	decreaseHour = () => {
		let hour = this.state.hour - 1;
		if (hour < 0){
			hour = 23;
		}
		this.setState({...this.state, hour: hour});
	}

	increaseMinute = () => {
		let minute = this.state.minute +5;
		let hour = this.state.hour;
		if (minute >= 60) {
			hour += 1;
			if (hour === 24){
				hour = 0;
			}
			minute = 0;
		}
		this.setState({hour: hour, minute: minute});
	}

	decreaseMinute = () => {
		let minute = this.state.minute -5;
		let hour = this.state.hour;
		if (minute < 0) {
			hour -= 1;
			if (hour < 0){
				hour = 23;
			}
			minute = 55;
		}
		this.setState({hour: hour, minute: minute});
	}

	pad(value) {
		value = value.toString();
		if (value.length === 2){
			return value;
		}else{
			return "0" + value;
		}
	}

	handleHourScroll = (event) => {
		if (event.deltaY < 0){
			this.increaseHour();
		}else{
			this.decreaseHour();
		}
	}

	handleMinuteScroll = (event) => {
		if (event.deltaY < 0){
			this.increaseMinute();
		}else{
			this.decreaseMinute();
		}
	}

    render(){
		var displayHour = this.state.hour;
		var AM_PM = "AM";
		if (!this.props.time24hour) {
			if (displayHour === 0){
				displayHour = 12;
			}else if (displayHour === 12){
				displayHour = 12;
				AM_PM = "PM";
			}else if(displayHour > 12 ){
				displayHour -= 12;
				AM_PM = "PM";
			}
		}
        return(
			<div>
				<input type="text" placeholder="Select Date.." className="date"/>
				<div className="flatpickr-calendar hasTime  animate arrowTop showTimeInput open">
					<div className="flatpickr-time" tabIndex="-1">
						<div className="numInputWrapper">
							<input className="numInput flatpickr-hour" 
								type="text" pattern="\d*" tabIndex="-1" 
								step="1" min="1" max="12" title={l10n.scrollTitle} 
								value={this.pad(this.state.hour)} 
								onWheel={this.handleHourScroll}
								/>
							<span className="arrowUp" onClick={this.increaseHour}/>
							<span className="arrowDown" onClick={this.decreaseHour}/>
						</div>
						<span className="flatpickr-time-separator">:</span>
						<div className="numInputWrapper">
							<input className="numInput flatpickr-minute" type="text"  
								pattern="\d*" tabIndex="-1" step="5" min="0" max="59" 
								onWheel={this.handleMinuteScroll}
								value={this.pad(this.state.minute)} 
								title={l10n.scrollTitle}/>
							<span className="arrowUp" onClick={this.increaseMinute}/>
							<span className="arrowDown" onClick={this.decreaseMinute}/>
						</div>
						{!this.props.time24hour && 
							<span className="flatpickr-am-pm" title={l10n.toggleTitle} tabIndex="-1">
								{AM_PM}
							</span>
						}
					</div>
				</div>
			</div>
        )
    }
}