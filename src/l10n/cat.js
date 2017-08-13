/* Catalan locals for flatpickr */
import l10n from "./default";
l10n = {};

l10n.weekdays = {
    shorthand: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
    longhand: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
};

l10n.cat.months = {
    shorthand: ["Gen", "Febr", "Març", "Abr", "Maig", "Juny", "Jul", "Ag", "Set", "Oct", "Nov", "Des"],
    longhand: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"]
};

l10n.ordinal = (nth) => {
    const s = nth % 100;
    if (s > 3 && s < 21) return "è";
    switch (s % 10) {
    case 1: return "r";
    case 2: return "n";
    case 3: return "r";
    case 4: return "t";
    default: return "è";
    }
};

l10n.firstDayOfWeek = 1;
