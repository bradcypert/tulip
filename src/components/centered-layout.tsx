import React, { Children } from "react"
import PropTypes from "prop-types"
import { FlexboxGrid } from "rsuite";
import Layout from "./layout";
import "./layout.less"

const CenteredLayout = ({ children, pageContext: { frontmatter: { title } } }) => {
    return (
        <>
            <Layout>
                <div className={`centered-page ${title.toLowerCase()}-page`} style={{ margin: "15px 0" }}>
                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={4} />
                        <FlexboxGrid.Item colspan={16}>
                            <main className="blog-content">
                                {children}
                            </main>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div>
            </Layout>
        </>
    )
}

CenteredLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CenteredLayout