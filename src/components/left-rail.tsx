import React from "react"
import Segment from "./segment";
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
            <Segment>
                <h4 className="text-xl">Never miss a beat</h4>
                <h5 className="text-lg" style={{ marginBottom: "1rem" }}>Join my newsletter.</h5>
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