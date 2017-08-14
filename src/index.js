import React from "react";
import ReactDOM from "react-dom";
import ReactPickr from "./ReactPickr";
import ReactTimePickr from "./ReactTimePickr";
import "./l10n/de";

ReactDOM.render(
    <div>
        <ReactPickr default={new Date()}/>
        <ReactTimePickr time24hour/>
    </div>,
    document.getElementById("root")
);

