import React from "react";
// import PropTypes from "prop-types";
import {getDaysinMonth} from "./utils";
import l10n from "../l10n/default";
import Day from "./Day";

export default class Days extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        this.props.onSelection(event.target.dataset.date);
    }

    enumerateDays(){
        const firstOfMonth = (new Date(this.props.currentYear,this.props.currentMonth, 1).getDay() - l10n.firstDayOfWeek + 7 ) % 7;
        const daysInMonth = getDaysinMonth((this.props.currentMonth + 12) % 12, this.props.currentYear);
        let prevMonthDays = getDaysinMonth((this.props.currentMonth + 12) % 12, this.props.currentYear);
        let	dayNumber = prevMonthDays - firstOfMonth;
        let dayIndex = 0;
        let days = [];

        for (; dayNumber < prevMonthDays; dayNumber++) {
            if (this.props.onlyThisMonth){
                days.push(<span className="flatpickr-day disabled"/>)
            }else{
                let date = new Date(this.props.currentYear, this.props.currentMonth-1, dayNumber);
                days.push(						
                    <Day date={date}
                        type={"prevMonthDay"}
                        selected={date.getTime() === this.props.date.getTime()} 
                        onClick={this.onClick} />
                );
            }
        }

        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
            let date = new Date(this.props.currentYear, this.props.currentMonth, dayNumber);
            days.push(
                <Day date={date} 
                    selected={date.getTime() === this.props.date.getTime()} 
                    onClick={this.onClick} />
            );
        }

        for (let dayNum = daysInMonth + 1; days.length % 7 !== 0; dayNum++, dayIndex++) {
            if (this.props.onlyThisMonth){
                days.push(<span className="flatpickr-day disabled"/>)
            }else{
                let date =  new Date(this.props.currentYear, this.props.currentMonth + 1, dayNum - daysInMonth);
                days.push(
                    <Day date={date} 
                        type={"nextMonthDay"}
                        selected={date.getTime() === this.props.date.getTime()} 
                        onClick={this.onClick} />
                );
            }
        }
        return days;
    }

    render(){
        return(
            <div className="flatpickr-days" tabIndex="-1">
                <div className="dayContainer">
                    {this.enumerateDays()}
                </div>
            </div>
        )
    }
}