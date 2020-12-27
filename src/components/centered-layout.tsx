import React, { Children } from "react"
import PropTypes from "prop-types"
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Layout from "./layout";
import "./layout.less"

const CenteredLayout = ({ children, pageContext: { frontmatter: { title } } }) => {
    return (
        <>
            <Layout>
                <div className={`centered-page ${title.toLowerCase()}-page`} style={{ margin: "15px 0" }}>
                    <Grid>
                        <Grid.Column width={2}>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <main className="blog-content">
                                {children}
                            </main>
                        </Grid.Column>
                    </Grid>
                </div>
            </Layout>
        </>
    )
}

CenteredLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CenteredLayout