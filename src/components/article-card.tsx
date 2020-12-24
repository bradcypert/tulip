import { Link } from "gatsby";
import React from "react";
import { Segment } from "semantic-ui-react";
import Img from "gatsby-image";


const formatter = new Intl.DateTimeFormat('en-US');

const ArticleCard = ({ node }) => {
    const date = new Date();
    const dateStr = node.frontmatter.date;
    const expDateStr = dateStr.split("/");
    date.setMonth(+expDateStr[1] - 1);
    date.setDate(+expDateStr[2]);
    date.setFullYear(+expDateStr[0]);
    let featuredImgFluid = node.frontmatter.thumbnail?.childImageSharp?.fluid;

    return <Segment inverted>
        <article className="article-card-item">
            <div style={{maxHeight: "150px", overflow: "hidden"}}>
                <Img alt={node.frontmatter.title} fluid={featuredImgFluid} />
            </div>
            <h3>
                <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
            </h3>
            <h4>Published: {formatter.format(date)}</h4>
            <p>{node.excerpt}</p>
        </article>
    </Segment>
}

export default ArticleCard;