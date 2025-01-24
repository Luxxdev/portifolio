import placeHolder from '../../assets/images/placeHolder.png'
import unt from '../../assets/images/untitled.png'
import growers from '../../assets/images/growers.png'


const allProjetcs = [
    {
        name: 'project1Title',
        description: 'project1Text',
        image: unt,
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.google.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.github.com' },
        ],
        techs: ['react', 'i18n', 'react', 'i18n', 'react', 'i18n']
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
]

export default allProjetcs