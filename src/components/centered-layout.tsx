import React, { Children } from "react"
import PropTypes from "prop-types"
import Layout from "./layout";
import "./layout.less"
import SEO from "./seo";

const CenteredLayout = ({ children, pageContext: { frontmatter: { title, description } } }) => {
    return (
        <>
            <SEO frontmatter={{title: title, description: description}}/>
            <Layout>
                <div className={`centered-page ${title.toLowerCase().replace(" ", "-")}-page`} style={{ margin: "15px 0" }}>
                    <div className="grid grid-cols-12">
                        <div className="col-start-2 col-span-10">
                            <main className="blog-content">
                                {children}
                            </main>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

CenteredLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CenteredLayout