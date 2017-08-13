/* Default (english / us) locals for reactpickr */
var l10n = {};

l10n.weekdays = {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
        "Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ]
};

l10n.months = {
    shorthand: [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec",
    ],
    longhand: [
        "January", "February", "March",	"April",
        "May", "June", "July", "August",
        "September", "October", "November", "December",
    ]
};

l10n.ordinal = (nth) => {
    const s = nth % 100;
    if (s > 3 && s < 21) return "th";
    switch (s % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
    }
},
l10n.firstDayOfWeek = 0;
l10n.weekAbbreviation = "Wk";
l10n.rangeSeparator = " to ";
l10n.scrollTitle = "Scroll to increment";
l10n.toggleTitle = "Click to toggle";


export default l10n;