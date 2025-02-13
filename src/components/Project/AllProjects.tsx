import itch from '../../assets/images/itchimg.png'
import growers from '../../assets/images/growersimg.png'
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
        techs: ['typescript', 'react'],
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
        image: itch,
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.github.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.google.com' },
        ],
        techs: ['Unity', 'C#', 'Godot', "GDScript"],
    },
    {
        name: 'project4Title',
        description: 'project4Text',
        image: '',
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.github.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.google.com' },
        ],
        techs: ['Unity', 'C#'],
    },
    {
        name: 'project5Title',
        description: 'project5Text',
        image: '',
        buttons: [
            { label: 'projectsButtonViewProject', link: 'https://www.github.com' },
            { label: 'projectsButtonViewCode', link: 'https://www.google.com' },
        ],
        techs: ['Selenium', 'Python'],
    },
]

export default allProjetcs