import React from "react"
import { TagGroup, Tag } from 'rsuite';

const LearnSomething = () => {
    return (
        <>
            <h2>Learn Something New</h2>
            <TagGroup>
                <Tag color="red">Java</Tag>
                <Tag color="orange">Kotlin</Tag>
                <Tag color="yellow">Scala</Tag>
                <Tag color="green">Clojure</Tag>
                <Tag color="cyan">Go</Tag>
                <Tag color="blue">TypeScript</Tag>
                <Tag color="violet">React</Tag>
                <Tag color="violet">PHP</Tag>
                <Tag color="green">Python</Tag>
            </TagGroup>
        </>)
}

export default LearnSomething
