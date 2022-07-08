import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/cl4ba0m5n2txk01z6322ghwzv/master',
  {
    headers: {
      authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTUzOTI0ODQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsNGJhMG01bjJ0eGswMXo2MzIyZ2h3enYvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYTlkMTQ4N2YtYjY2OC00MTFiLWJmNTItMjE4MDQzNGJjOWQ4IiwianRpIjoiY2w0aDV4enNiMjhtZTAxeG9naGtzaHA4ZiJ9.3s5Mnh2yrHEpD1jy8mMobgfflxMc-eKUwMaLQYr5ufiPNlq_68AY6zi8q2rrCcyh75yPRwbEVl-QAasZaP2tAG_hOEtDdxaHIWq2XoyMHCBdnwAkjlRsee3s2clFDxOFFHRwppzPVsyDobgngMQ7y-mKpUqAVMLmTEjK_zCPDndw9bLZretAj0HJhWb42Q18YeGUVRMNEFu_2dDyIcUYK4zxmA7RtJWPbpj0tSUa5WkDLV_O9ZGtoZWsE4v8Z62aItwvLnH0q-fCm7_0HgTvEp2iKVOw7Wzx7C0E3WtOrhSEEBpkPzxkVqcN4oGZlOoRMysJVxKu0on3hKaWS7CIPoU2UjRIrdrxwhfwQ2tMojcAhRadtCLBDR57a_3KjphA3tr86RZu4RSxHY9kZu9Y1-XSN6erTlmmSv5egM743WQvjwGizj_jztowFX_2EYUaovtiJIl0_JAUhRAAhd_nT2vOTw82vra7LGPt2aRbxhGBfJbiFgoSkV6WydRBly6Ap5cbAeQjVH6STUPR04RWteAPxZ6Xet8rzO5hbhgXkLK3jdI6ena2U5WJRMV51r3eQ_CPUAtzMP_iIjQj9p857jFaS5mM7enZSd7Tlz6WAtxUAFicq592TGmd-TzefaMK8lFtkQ5mhyQtZI7wJuAiYX1NgjIefHQWD6f_vBo312Y',
    },
  },
);

export async function getAllProjects () {
  try {
    const data = await graphcms.request(
      `
        query getAllProjects() {
          projects {
              title
              slug
              sourceURL
              demoURL
              stage
              projectImage {
                url
                avatarAuthor {
                  id
                }
              }
              description
            }
        }`,
      {
        preview: false,
        stage: 'PUBLISHED',
      },
    );
    return data.projects;
  } catch (error) {
    console.log(error.name);
    return [];
  }
}

export async function getAuthor () {
  try {
    const data = await graphcms.request(
      `
        query getAuthor() {
          authors {
              name
              position 
              id
            }
        }`,
      {
        preview: false,
        stage: 'PUBLISHED',
      },
    );
    return data.authors;
  } catch (error) {
    console.log(error.name);
    return [];
  }
}

export async function getAboutMe () {
  try {
    const data = await graphcms.request(
      `
        query getAboutMe() {
          aboutMes {
            id
            title
            content {
              text
            }
          }
        }`,
      {
        preview: false,
        stage: 'PUBLISHED',
      },
    );
    return data.aboutMes;
  } catch (error) {
    console.log(error.name);
    return [];
  }
}

export async function getHobbies () {
  try {
    const data = await graphcms.request(
      `
        query getSkills() {
          hobbie {
            title
            id
            content
          }
        }`,
      {
        preview: false,
        stage: 'PUBLISHED',
      },
    );
    return data.hobbie;
  } catch (error) {
    console.log(error.name);
    return [];
  }
}
