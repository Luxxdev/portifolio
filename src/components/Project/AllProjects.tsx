import placeHolder from '../../assets/images/placeHolder.png'


const allProjetcs = [
    {
        name: 'project1Title',
        description: 'project1Text',
        image: placeHolder,
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.google.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.github.com' },
        ],
        techs: ['react', 'i18n', 'react', 'i18n', 'react', 'i18n']
    },

    {
        name: 'project2Title',
        description: '',
        image: placeHolder,
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.github.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.google.com' },
        ],
        techs: ['react', 'i18n']
    },
]

export default allProjetcs