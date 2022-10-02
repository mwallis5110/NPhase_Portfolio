import React from "react";

import "./messagePopups.css";

export function SuccessMessagePopup() {
    return (
        <div className="successPopupWrapper">
            <p>Message sent. We'll contact you shortly</p>
        </div>
    )
}

export function ErrorMessagePopup() {
    return (
        <div className="errorPopupWrapper">
            <p>An error occurred when sending the message. Please email us at **Email address** instead</p>
        </div>
    )
}