/* Swedish locals for flatpickr */
import l10n from "./default";

l10n.firstDayOfWeek = 1;
l10n.weekAbbreviation = "v";

l10n.weekdays = {
    shorthand: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
    longhand: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
};

l10n.months = {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    longhand: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
};

l10n.ordinal = () => {
    return ".";
};
