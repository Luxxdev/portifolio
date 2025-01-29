import unt from '../../assets/images/untitled.png'
import growers from '../../assets/images/growers.png'
import portfolio from '../../assets/images/portfolio.png'


const allProjetcs = [
    {
        name: 'project1Title',
        description: 'project1Text',
        image: portfolio,
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.google.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.github.com' },
        ],
        techs: ['typescript', 'react', 'vite', 'i18n',],
        site: true

    },

    {
        name: 'project2Title',
        description: 'project2Text',
        image: growers,
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.github.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.google.com' },
        ],
        techs: ['Godot', 'GDScript']
    },

    {
        name: 'project3Title',
        description: 'project3Text',
        image: unt,
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.github.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.google.com' },
        ],
        techs: ['react', 'i18n'],
    },
    {
        name: 'project4Title',
        description: 'project4Text',
        image: unt,
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.github.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.google.com' },
        ],
        techs: ['react', 'i18n'],
    },
]

export default allProjetcs