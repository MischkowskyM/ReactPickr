/* Slovenian locals for flatpickr */
import l10n from "./default";

l10n.weekdays = {
    shorthand: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
    longhand: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
};

l10n.months = {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
    longhand: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"]
};

l10n.firstDayOfWeek = 1;
l10n.rangeSeparator = " do ";
l10n.ordinal = function () {
    return ".";
};
