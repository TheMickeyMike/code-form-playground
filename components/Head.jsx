import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{props.title || ''}</title>
    <style global jsx>{`
  body {
    text-align:center;
    font-family: Helvetica, Arial, sans-serif;
  }

    `}</style>
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
}

export default Head
