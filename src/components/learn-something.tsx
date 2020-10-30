import { Link } from "gatsby";
import React from "react"
import { TagGroup, Tag } from 'rsuite';

const LearnSomething = () => {
    return (
        <div className="learn-something-new">
            <h2>Learn Something New</h2>
            <TagGroup>
                <Link to="/tags/java">
                    <Tag color="red">Java</Tag>
                </Link>
                <Link to="/tags/kotlin">
                    <Tag color="orange">Kotlin</Tag>
                </Link>
                <Link to="/tags/scala">
                    <Tag color="yellow">Scala</Tag>
                </Link>
                <Link to="/tags/clojure">
                    <Tag color="green">Clojure</Tag>
                </Link>
                <Link to="/tags/go">
                    <Tag color="cyan">Go</Tag>
                </Link>
                <Link to="/tags/typescript">
                    <Tag color="blue">TypeScript</Tag>
                </Link>
                <Link to="/tags/react">
                    <Tag color="violet">React</Tag>
                </Link>
                <Link to="/tags/php">
                    <Tag color="violet">PHP</Tag>
                </Link>
                <Link to="/tags/python">
                    <Tag color="green">Python</Tag>
                </Link>
            </TagGroup>
        </div>)
}

export default LearnSomething
