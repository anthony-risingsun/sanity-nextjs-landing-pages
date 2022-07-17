export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62d363efe5d6e473ad64cc7f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5hqwc8xz',
                  apiId: '5154b5df-2169-4036-9442-8cd0dedbba61'
                },
                {
                  buildHookId: '62d363ef44bb7b77acaad484',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-venw9ixy',
                  apiId: 'beddb5b9-f3ac-4e50-a9fd-f9f6de5af377'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anthony-risingsun/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-venw9ixy.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
