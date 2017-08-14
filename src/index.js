import React from "react";
import ReactDOM from "react-dom";
import ReactPickr from "./ReactPickr";
import "./l10n/de";

ReactDOM.render(
    <ReactPickr default={new Date()}/>,
    document.getElementById("root")
);

