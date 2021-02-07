import React from "react"

type formOptions = "javascript" | "clojure" | "java" | "react";

interface Props {}

const actions = {
    "react": "https://sendfox.com/form/m79dl3/m88gqm",
    "java": "https://sendfox.com/form/m79dl3/m447vm",
    "clojure": "https://sendfox.com/form/m79dl3/3q5zw3",
    "javascript": "https://sendfox.com/form/m79dl3/1wgy0m",
};

const SendFoxForm: React.FunctionComponent<Props> = () => {
    const [selectedForm, setSelectedForm] = React.useState<formOptions>('javascript');

    const formOptions = [
        {
            key: 'javascript',
            text: 'JavaScript',
            value: 'javascript',
            // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
        },
        {
            key: 'clojure',
            text: 'Clojure',
            value: 'clojure',
            // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
        },
        {
            key: 'react',
            text: 'React',
            value: 'react',
            // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
        },
        {
            key: 'java',
            text: 'Java',
            value: 'java',
            // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
        },
    ];
    const [gdprCheck, setGdprChecked] = React.useState(false);
    return (
        <form
            action={actions[selectedForm]}
            className="sendfox-form form"
            data-async="true"
            id="m88gqm"
            method="post"
        >
            <div className="field">
                    <label htmlFor="topic">Topic:</label>
                    <select value={selectedForm} id="topic" name="topic" className="block w-full text-black" onChange={(e) => {
                        setSelectedForm(e.target.value as formOptions);
                    }}>
                        {formOptions.map((o) => <option key={o.key} value={o.value}>{o.text}</option>)}
                    </select>
                </div>
            <div className="field mt-2">
                <label htmlFor="first_name">First Name</label>
                <input
                className="block w-full"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    required
                    type="text"
                ></input>
            </div>
            <div className="field mt-2">
                <label htmlFor="last_name">Last Name</label>
                <input
                className="block w-full"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    required
                    type="text"
                ></input>
            </div>
            <div className="field mt-2">
                <label htmlFor="email">Email</label>
                <input className="block w-full" name="email" id="email" placeholder="Email" required type="email"></input>
            </div>
            <div className="field mt-2">
                <div className={`ui checkbox ${gdprCheck && "checked"}`}>
                    <input id="gdpr" name="gdpr" required type="checkbox" value="1" checked={gdprCheck} onChange={() => {
                        setGdprChecked(!gdprCheck);
                    }}></input>
                    <label htmlFor="gdpr">
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