/* French locals for flatpickr */
import l10n from "./default";

l10n.firstDayOfWeek = 1;


l10n.weekdays = {
    shorthand: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    longhand: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
};


l10n.months = {
    shorthand: ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"],
    longhand: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
};


l10n.ordinal = (nth) => {
    if (nth > 1) 
        return "ème";


	

    return "er";
};

l10n.rangeSeparator = " au ";
l10n.weekAbbreviation = "Sem";
l10n.scrollTitle = "Défiler pour augmenter la valeur";
l10n.toggleTitle = "Cliquer pour basculer";