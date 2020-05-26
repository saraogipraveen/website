import React from "react"
import { Highlight, Snippet } from "react-instantsearch-dom"
import { Link } from "gatsby"

export const ToolsHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={hit.fields.slug} onClick={clickHandler}>
      <h4>
        <Highlight attribute="name" hit={hit} tagName="mark" />
      </h4>
      {hit.description}
      <Snippet attribute="description" hit={hit} tagName="mark" />

      {/* {hit.tags.map((tag, index) => (
        <Fragment key={tag}>
          {index > 0 && `, `}
          {tag}
        </Fragment>
      ))} */}
    </Link>
  </div>
)
