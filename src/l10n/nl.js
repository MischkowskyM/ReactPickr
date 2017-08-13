/* Dutch locals for flatpickr */
import l10n from "./default";

l10n.weekdays = {
    shorthand: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    longhand: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
};

l10n.months = {
    shorthand: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sept", "okt", "nov", "dec"],
    longhand: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
};

l10n.firstDayOfWeek = 1;
l10n.weekAbbreviation = "wk";
l10n.rangeSeparator = " tot ";
l10n.scrollTitle = "Scroll voor volgende / vorige";
l10n.toggleTitle = "Klik om te wisselen";

l10n.ordinal = nth => {
    if (nth === 1 || nth === 8 || nth >= 20)
        return "ste";


    return "de";
};
