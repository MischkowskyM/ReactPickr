/* Esperanto locals for flatpickr */
import l10n from "./default";

l10n.firstDayOfWeek = 1;

l10n.rangeSeparator = " ĝis ";
l10n.weekAbbreviation = "Sem";
l10n.scrollTitle = "Rulumu por pligrandigi la valoron";
l10n.toggleTitle = "Klaku por ŝalti";

l10n.weekdays = {
    shorthand: ["Dim", "Lun", "Mar", "Mer", "Ĵaŭ", "Ven", "Sab"],
    longhand: ["dimanĉo", "lundo", "mardo", "merkredo", "ĵaŭdo", "vendredo", "sabato"]
};

l10n.months = {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aŭg", "Sep", "Okt", "Nov", "Dec"],
    longhand: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "aŭgusto", "septembro", "oktobro", "novembro", "decembro"]
};

l10n.ordinal = () => {
    return "-a";
};
