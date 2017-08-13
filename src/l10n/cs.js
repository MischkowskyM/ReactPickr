/* Czech locals for flatpickr */
import l10n from "./default";

l10n.weekdays = {
    shorthand: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
    longhand: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"]
};

l10n.months = {
    shorthand: ["Led", "Ún", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Srp", "Zář", "Říj", "Lis", "Pro"],
    longhand: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]
};

l10n.firstDayOfWeek = 1;

l10n.ordinal = function() {
    return ".";
};
