import itch from '../../assets/images/itchimg.png'
import portfolio from '../../assets/images/portfolio.png'
import francogagnor from '../../assets/images/francogagnor.png'
import mediaarchive from '../../assets/images/mediaarchive.png'

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
        name: 'project3Title',
        description: 'project3Text',
        image: itch,
        buttons: [
            { label: 'itchPage', link: 'https://luxezito.itch.io/' },
        ],
        techs: ['Unity', 'C#', 'Godot', "GDScript"],
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
    {
        name: 'project7Title',
        description: 'project7Text',
        image: mediaarchive,
        buttons: [
            { label: 'projectsButtonViewCodeFront', link: 'https://github.com/Luxxdev/media-archive-front' },
            { label: 'projectsButtonViewCodeBack', link: 'https://github.com/Luxxdev/media-archive-api' },
        ],
        techs: ['html/css', 'javaScript', 'Flask', 'SQLite'],
        site: true,
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


]

export default allProjetcs