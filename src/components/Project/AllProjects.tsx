import placeHolder from '../../assets/images/placeHolder.png'
import unt from '../../assets/images/untitled.png'
import growers from '../../assets/images/growers.png'
import portfolio from '../../assets/images/portfolio.png'


const allProjetcs = [
    {
        name: 'project1Title',
        description: 'project1Text',
        image: unt,
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.google.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.github.com' },
        ],
        techs: ['react', 'i18n', 'javascriptaaa', 'i18n',]
    },

    {
        name: 'project2Title',
        description: 'project2Text',
        image: growers,
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.github.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.google.com' },
        ],
        techs: ['react', 'i18n']
    },

    {
        name: 'project2Title',
        description: 'project2Text',
        image: portfolio,
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.github.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.google.com' },
        ],
        techs: ['react', 'i18n'],
        site: true
    },
]

export default allProjetcs