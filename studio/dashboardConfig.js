export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7ef62c3afb3157d443910f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qxkbxhjw',
                  apiId: 'fea8837e-de5e-4b50-a48e-a84d01f1dbdd'
                },
                {
                  buildHookId: '5f7ef62c230a7b6115b253ac',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kb8n4yqb',
                  apiId: '94aadae0-58ee-4d32-b86b-fe7cd9bc1b00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/svs/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kb8n4yqb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
