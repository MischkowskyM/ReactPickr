import React from "react";
import l10n from "../l10n/default";

export default class Weekdays extends React.Component{
    render(){
        const firstDayOfWeek = l10n.firstDayOfWeek;
        let	weekdays = l10n.weekdays.shorthand.slice();
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = [].concat(
                weekdays.splice(firstDayOfWeek, weekdays.length),
                weekdays.splice(0, firstDayOfWeek)
            );
        }

        return (
            <div className="flatpickr-weekdays">
                {weekdays.map(name => {
                    return (
                        <span className="flatpickr-weekday">
                            {name}
                        </span>
                    );
                })}
            </div>
        );
    }
}