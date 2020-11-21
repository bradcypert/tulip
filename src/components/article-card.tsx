import { Link } from "gatsby";
import React from "react";
import { Segment } from "semantic-ui-react";


const formatter = new Intl.DateTimeFormat('en-US');

const ArticleCard = ({ node }) => {
    const date = new Date();
    const dateStr = node.frontmatter.date;
    const expDateStr = dateStr.split("/");
    date.setMonth(+expDateStr[1]);
    date.setDate(+expDateStr[2]);
    date.setFullYear(+expDateStr[0]);

    return <Segment inverted>
        <article className="tag-block">
            <Link to={`/${node.slug}`}>
                <h3>{node.frontmatter.title}</h3>
            </Link>
            <h4>Published: {formatter.format(date)}</h4>
            <p>{node.excerpt}</p>
        </article>
    </Segment>
}

export default ArticleCard;