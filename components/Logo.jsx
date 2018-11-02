import React, { Fragment } from 'react'

export default () => (
  <h1 className="container">
    <span>_ONLY_FRIENDS_</span>
    <span>_ALLOWED_</span>
    <span className="regular">~ pal ~</span>
    <style jsx>
      {`
      .h1 {
        align-items: center;
        justify-content: center;
      }
      .container span {
        display: block;
      }

      .container span.regular{
        font-weight: normal;
      }
      `}
    </style>
  </h1>

)