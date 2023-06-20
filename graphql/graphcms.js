import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.hygraph.com/v2/cl7oxpeax3pg801uhhojx4bgb/master",
  cache: new InMemoryCache(),
});

export async function getHomePage() {
  try {
    const { data } = await client.query({
      query: gql`
        query MyQuery {
          page(where: { slug: "home" }) {
            name
            aboutTitle
            aboutContent
            hobbiesTitle
            hobbies
            id
            myName
            myposition
            slug
            toolsTitle
            toolsContent
            stack
          }
        }
      `,
    });
    return data.page;
  } catch (error) {
    console.log(error.name);
    return [];
  }
}

export async function getWorks() {
  try {
    const { data } = await client.query({
      query: gql`
        query MyQuery {
          work {
            id
            slug
            stack
            name
            description
            githubUrl
            bg {
              id
              url
              width
              size
              height
            }
          }
        }
      `,
    });
    return data.work;
  } catch (error) {
    console.log(error.name);
    return [];
  }
}
