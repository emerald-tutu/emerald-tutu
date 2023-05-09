import { gql } from 'graphql-request'

const pageQuery = gql`
  query PageQuery($slug: String!) {
    page(where: { slug: $slug }) {
      slug
      pageNumber
      backgroundImage {
        url
      }
      blocks {
        __typename
        ... on BigMenu {
          id
          pages {
            title
            pageNumber
            id
            blocks {
              ... on Section {
                name
                id
                slug
              }
            }
            slug
          }
        }
        ... on Section {
          id
          name
          contents {
            __typename
            ... on Text {
              id
              paragraphs
              isBlueBackground
            }
            ... on Heading {
              id
              heading
            }
            ... on Picture {
              id
              photo {
                height
                width
                url
              }
              altText
              caption
            }
            ... on TooltipPicture {
              id
              annotatedPhoto {
                picture {
                  photo {
                    height
                    width
                    url
                  }
                }
                tooltip {
                  id
                  xPos
                  yPos
                  number
                  text
                }
              }
            }
            ... on PersonList {
              id
              people {
                name
                title
                photo {
                  height
                  url
                  width
                }
                bio
              }
            }
            ... on VimeoEmbeddable {
              id
              videoID
              iframeSrc
            }
            ... on Video {
              id
              video {
                url
              }
            }
            ... on ImageCarousel {
              id
              heading
              images {
                image {
                  height
                  width
                  url
                }
                altText
                caption
              }
              blueBackground
            }
            ... on CollapsibleText {
              id
              text
              highlight
              heading
            }
            ... on NumberedList {
              id
              title
              items {
                id
                itemTitle
                itemDescription
              }
            }
          }
        }
      }
      id
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
      subtitle
      title
      footer {
        pages(where: {slug_not: "home"} orderBy: pageNumber_ASC) {
          id
          title
          pageNumber
          blocks {
            __typename
            ... on Section {
              id
              name
            }
          }
          slug
        }
        address
      }
      header
    }
  }
`

export { pageQuery }
