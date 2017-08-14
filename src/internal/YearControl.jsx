import React from "react";
import PropTypes from "prop-types";
import l10n from "../l10n/default";

export default class YearControl extends React.Component{
	static propTypes = {
		value: PropTypes.string,
		onYearChange: PropTypes.func,
	}

	onYearScroll = (event) =>{
		let year = this.props.value;
		if (event.deltaY < 0){
			this.increaseYear();
		}else{
			this.decreaseYear();
		}
	}

	handleYearClick = (event) => {
		event.target.setSelectionRange(0,event.target.value.length);
	}
	
	increaseYear = () =>{
		this.props.onYearChange(this.props.value + 1);
	}

	decreaseYear = () =>{
		this.props.onYearChange(this.props.value - 1);
	}

	handleYearChange = (event) => {
		this.props.onYearChange(event.target.value);
	}

	render(){
		return (
			<div className="numInputWrapper" onWheel={this.onYearScroll} >
				<input className="numInput cur-year" 
					type="text" pattern="\d*" 
					title={l10n.scrollTitle}
					onClick={this.handleYearClick}
					onChange={this.handleYearChange}
					value={this.props.value} />
				<span className="arrowUp" onClick={this.increaseYear}/>
				<span className="arrowDown" onClick={this.decreaseYear}/>
			</div>);
	}
}