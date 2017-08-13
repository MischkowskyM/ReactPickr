/* Slovak locals for flatpickr */
import l10n from "./default";

l10n.weekdays = {
    shorthand: ["Ned", "Pon", "Ut", "Str", "Štv", "Pia", "Sob"],
    longhand: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
};

l10n.months = {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
    longhand: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"]
};

l10n.firstDayOfWeek = 1;
l10n.rangeSeparator = " do ";
l10n.ordinal = function () {
    return ".";
};
