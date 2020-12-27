import React from "react"
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown";
import LearnSomething from "./learn-something"
import SendFoxForm from "./sendfox-form"

const LeftRail = () => {

    const [selectedForm, setSelectedForm] = React.useState('javascript');

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

    return (
        <>
            <LearnSomething />
            <Segment inverted>
                <h4>Never miss a beat</h4>
                <h5 style={{ marginBottom: "1rem" }}>Join my newsletter.</h5>
                <div className="field" style={{ marginBottom: "1rem" }}>
                    <label>Topic:</label>
                    <Dropdown
                        selection
                        fluid
                        onChange={(e, { value }) => { setSelectedForm(value as unknown as string) }}
                        value={selectedForm}
                        options={formOptions}
                    />
                </div>
                <SendFoxForm form="javascript" />
            </Segment>
        </>
    )
}

export default LeftRail;