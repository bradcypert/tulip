import PropTypes from "prop-types"
import React from "react"

interface Props {
    form: "react" | "java" | "clojure" | "javascript";
}

const actions = {
    "react": "https://sendfox.com/form/m79dl3/m88gqm",
    "java": "https://sendfox.com/form/m79dl3/m447vm",
    "clojure": "https://sendfox.com/form/m79dl3/3q5zw3",
    "javascript": "https://sendfox.com/form/m79dl3/1wgy0m",
};

const SendFoxForm: React.FunctionComponent<Props> = ({ form }) => {
    const [gdprCheck, setGdprChecked] = React.useState(false);
    return (
        <form
            action={actions[form]}
            className="sendfox-form ui form"
            data-async="true"
            id="m88gqm"
            method="post"
        >
            <div className="field">
                <label>First Name</label>
                <input
                    name="first_name"
                    placeholder="First Name"
                    required
                    type="text"
                ></input>
            </div>
            <div className="field">
                <label>Last Name</label>
                <input
                    name="last_name"
                    placeholder="Last Name"
                    required
                    type="text"
                ></input>
            </div>
            <div className="field">
                <label>Email</label>
                <input name="email" placeholder="Email" required type="email"></input>
            </div>
            <div className="field">
                <div className={`ui checkbox ${gdprCheck && "checked"}`}>
                    <input name="gdpr" required type="checkbox" value="1" checked={gdprCheck} onChange={() => {
                        setGdprChecked(!gdprCheck);
                    }}></input>
                    <label>
                        I agree to receive email updates and promotions.
                    </label>
                </div>
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                <input
                    autoComplete="off"
                    name="a_password"
                    tabIndex={-1}
                    type="text"
                    value=""
                ></input>
            </div>
            <button className="ui button primary" type="submit">Send me my free stuff now!</button>
        </form>
    )
}

export default SendFoxForm;