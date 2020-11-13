import { Link } from "gatsby";
import React from "react"
import { Label } from "semantic-ui-react";

const LearnSomething = () => {
    return (
        <div className="learn-something-new">
            <h2 style={{ color: "black" }}>Learn Something New</h2>
            <Link to="/tags/java">
                <Label color="yellow">Java</Label>
            </Link>
            <Link to="/tags/kotlin">
                <Label color="orange">Kotlin</Label>
            </Link>
            <Link to="/tags/scala">
                <Label color="red">Scala</Label>
            </Link>
            <Link to="/tags/clojure">
                <Label color="blue">Clojure</Label>
            </Link>
            <Link to="/Labels/go">
                <Label color="teal">Go</Label>
            </Link>
            <Link to="/tags/typescript">
                <Label color="blue">TypeScript</Label>
            </Link>
            <Link to="/tags/react">
                <Label color="violet">React</Label>
            </Link>
            <Link to="/tags/php">
                <Label color="violet">PHP</Label>
            </Link>
            <Link to="/tags/python">
                <Label color="green">Python</Label>
            </Link>
        </div>)
}

export default LearnSomething
