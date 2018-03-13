import React from "react";
import Header from "../components/header"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
        <Header 
            mainHeading={ post.frontmatter.title }
            subHeading={ post.frontmatter.subtitle }
            size="small"
        />
        <section className="section-activity">
          <div className="markdown row" dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
    </div>
  );
};

export const query = graphql`
  query ActivityQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;