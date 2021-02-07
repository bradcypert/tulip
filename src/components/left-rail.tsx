import React from "react"
import Segment from "./segment";
import LearnSomething from "./learn-something"
import SendFoxForm from "./sendfox-form"

const LeftRail = () => {

    return (
        <>
            <LearnSomething />
            <Segment>
                <h4 className="text-xl">Never miss a beat</h4>
                <h5 className="text-lg" style={{ marginBottom: "1rem" }}>Join my newsletter.</h5>
                <SendFoxForm />
            </Segment>
        </>
    )
}

export default LeftRail;