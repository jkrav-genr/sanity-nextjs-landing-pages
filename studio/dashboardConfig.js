export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e60752a7a677651e6178ec5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hkzvt3bg',
                  apiId: 'dcafebec-40d4-4a48-9ecb-65028f172ed8'
                },
                {
                  buildHookId: '5e60752b3e2f902e23f685c6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9nfo59oj',
                  apiId: 'cd0bc699-8485-4c1f-b67f-b53c2f6707d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jkrav-genr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9nfo59oj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
