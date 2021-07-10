import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import darkTheme from 'prism-react-renderer/themes/palenight'
import lightTheme from 'prism-react-renderer/themes/github'
import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-kotlin");
require("prismjs/components/prism-dart");
require("prismjs/components/prism-clojure");


export default (props) => {
    const isDark = window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const className = props.children.props.className || ''
    const matches = className.match(/language-(?<lang>.*)/)
    return (
        <Highlight {...defaultProps} code={props.children.props.children.trim()} language={
            matches && matches.groups && matches.groups.lang
                ? matches.groups.lang
                : ''
        }
            theme={isDark ? darkTheme : lightTheme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={{ ...style, padding: '20px' }}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}