import React from "react";
import PropTypes from "prop-types";
import Calendar from "./internal/Calendar"
import "./reactpickr.css";

export default class ReactPickr extends React.Component{
	static propTypes = {
		placeholder: PropTypes.string,
		enableTime: PropTypes.bool,
		// TODO: Accept unix timestamps, ISO date strings, strings of format "YYYY-MM-DD HH:MM", "today"
		default: PropTypes.instanceOf(Date),
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
			value: this.props.default,
			expand: false,
			pickedDate: "",
		}
        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }


    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.calendarWrapper = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.calendarWrapper && !this.calendarWrapper.contains(event.target)) {
			if (this.state.expand ){
				setTimeout(() => {
					this.setState({expand: false});
				}, 100)
			}
        }
    }

	openCalendar = () => {
		this.setState({expand: true});
	}

	handleDateChange = (date)=>{
		this.setState({
			value: date,
			expand: false,
		});		
	}

	render(){
		return(
			<div>
				<input className="flatpickr flatpickr-input active" 
					onClick={this.openCalendar}
					type="text"
					placeholder={this.props.placeholder}
					value={this.state.value ? this.state.value.toString() : ""}
					readOnly={true} />
				<div ref={this.setWrapperRef}>
					<Calendar {...this.props} 
						expand={this.state.expand}
						currentDate={this.state.value}
						onDateChange={this.handleDateChange}/> 
				</div>
			</div>
		)
	}
}