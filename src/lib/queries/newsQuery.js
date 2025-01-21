export const newsQuery = `query News($current_page: Int!, $limit: Int! ,$category:String!,$publish_date :String) {
    news: entries(
      collection: "news"
      page: $current_page
      limit: $limit
      sort: ["date desc"]
      filter: { site: "default",date: {contains: $publish_date}, news_category: { is: $category } }
    ) {
      current_page
      total
      last_page
      has_more_pages
      
      data {
        id
        title
  
        ... on Entry_News_News {
          slug
          title
          news_category {
            label
          }
          image {
            src
          }
          blueprint
          content
          locale
          published
          last_modified
          date(format: "M d  Y")
          source
        }
      }
    }
    
  }
  `;
