import { Link } from "gatsby";
import React from "react"
import Segment from "./segment";
import Badge from "./badge";

const LearnSomething = () => {
    return (
        <Segment>
            <div className="learn-something-new text-xl">
                <div className="text-xl">Learn Something New</div>
                <div>
                    <Link to="/tags/java">
                        <Badge color="yellow">Java</Badge>
                    </Link>
                    <Link to="/tags/kotlin">
                        <Badge color="pink">Kotlin</Badge>
                    </Link>
                    <Link to="/tags/scala">
                        <Badge color="red">Scala</Badge>
                    </Link>
                    <Link to="/tags/clojure">
                        <Badge color="blue">Clojure</Badge>
                    </Link>
                    <Link to="/tags/go">
                        <Badge color="indigo">Go</Badge>
                    </Link>
                    <Link to="/tags/typescript">
                        <Badge color="blue">TypeScript</Badge>
                    </Link>
                    <Link to="/tags/react">
                        <Badge color="purple">React</Badge>
                    </Link>
                    <Link to="/tags/php">
                        <Badge color="purple">PHP</Badge>
                    </Link>
                    <Link to="/tags/python">
                        <Badge color="green">Python</Badge>
                    </Link>
                </div>
            </div>
        </Segment>)
}

export default LearnSomething
