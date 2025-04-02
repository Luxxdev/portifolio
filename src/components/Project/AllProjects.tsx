import itch from '../../assets/images/itchimg.png'
import growers from '../../assets/images/growersimg.png'
import portfolio from '../../assets/images/portfolio.png'
import francogagnor from '../../assets/images/francogagnor.png'


const allProjetcs = [
    {
        name: 'project1Title',
        description: 'project1Text',
        image: portfolio,
        buttons: [
            { label: 'projectsButtonViewCode', link: 'https://github.com/Luxxdev/portifolio' },
        ],
        techs: ['TypeScript', 'React', 'MUI'],
        site: true

    },

    {
        name: 'project2Title',
        description: 'project2Text',
        image: growers,
        buttons: [
            { label: 'itchPage', link: 'https://opaogamestudio.itch.io/growers' },
            { label: 'steamPage', link: 'https://store.steampowered.com/app/2613940/Growers/' },
        ],
        techs: ['Godot', 'GDScript']
    },

    {
        name: 'project3Title',
        description: 'project3Text',
        image: itch,
        buttons: [
            { label: 'itchPage', link: 'https://luxezito.itch.io/' },
            { label: 'projectsButtonViewCode', link: 'https://github.com/Luxxdev?tab=repositories' },
        ],
        techs: ['Unity', 'C#', 'Godot', "GDScript"],
    },
    {
        name: 'project4Title',
        description: 'project4Text',
        image: '',
        buttons: [
            { label: 'projectsButtonViewCode', link: 'https://github.com/Luxxdev/Volin' },
        ],
        techs: ['Unity', 'C#'],
    },
    {
        name: 'project5Title',
        description: 'project5Text',
        image: '',
        buttons: [
            { label: 'projectsButtonViewCode', link: 'https://github.com/Luxxdev/exyon-bot' },
        ],
        techs: ['Selenium', 'Python'],
    },

    {
        name: 'project6Title',
        description: 'project6Text',
        image: francogagnor,
        buttons: [
            { label: 'projectsButtonViewCode', link: 'https://github.com/PedroVillafuerte/FrancoGagnorShop' },
        ],
        techs: ['TypeScript', 'React', 'MUI'],
        site: true

    },
]

export default allProjetcs