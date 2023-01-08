import React from 'react'
import Calculator from '../assets/Calculator.png'
import Todo from '../assets/Todo.png'
import grid from '../assets/grid.png'
import restaurant from '../assets/restaurant.png'
import countries from '../assets/countries.png'
import form from '../assets/form.png'

const ProjectDatas = [
    {
        imagePath: restaurant,
        title: "Chomp - Restaurant Website",
        description: "Chomp is a web template which is re-created with the template from webflow targeting the restaurant and food industry which anyone can use to present their business online. This also provides a beautiful e-commerce experience.",
        learning: "CSS Animations, Framer motion, React Router, Chakra Ui",
        webLink: "https://merry-pegasus-e54281.netlify.app",
        githubLink: "https://github.com/RameshKrishnan109/restaurant-website"
    },
    {
        imagePath: countries,
        title: "REST Countries API",
        description: "This is recreated with the design from frontend mentor. This project contains details about countries which gets fetched from rest countries api. This challenge was perfect practice to test Javascript skills.",
        learning: "Typescript, Asynchronous coding, javascript fetch method, Zustand state management",
        webLink: "https://transcendent-kleicha-35323d.netlify.app",
        githubLink: "https://github.com/RameshKrishnan109/countries-website"
    },
    {
        imagePath: form,
        title: "College application form",
        description: "This is recreated with a design inspired from behance. This project was a experience in learning form validation with react.",
        learning: "Form Validation, Formik, Yup",
        webLink: "https://legendary-douhua-f45b4c.netlify.app",
        githubLink: "https://github.com/RameshKrishnan109/student-application-form"
    },
    {
        imagePath: grid,
        title: "Testinomial grid",
        description: "This is recreated with the design from frontend mentor. This challenge was perfect practice to test CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it.",
        learning: "TailwindCSS for styling",
        webLink: "https://glistening-zabaione-4297c7.netlify.app",
        githubLink: "https://github.com/RameshKrishnan109/testinomial-grid-section"
    },
    {
        imagePath: Todo,
        title: "Todo web application",
        description: "This is recreated with the design from frontend mentor. This is a kind of app that generally used to maintain our day-to-day tasks.",
        learning: "Dark and light theme, Redux for state management",
        webLink: "https://bucolic-dusk-9a840b.netlify.app",
        githubLink: "https://github.com/RameshKrishnan109/todo-app"
    },
    {
        imagePath: Calculator,
        title: "Calculator",
        description: "This is recreated with the design from frontend mentor. Calculator can be used for performing basic mathematical operations like Addition, subtraction, multiplication, and division.",
        learning: "SCSS for styling, Sound implementation, Javascript string functions, CSS Grid basics",
        webLink: "https://adorable-salmiakki-0132ae.netlify.app",
        githubLink: "https://github.com/RameshKrishnan109/calculator-app"
    }
]

function Projects() {

    function TakeToNewLink(path) {
        window.open(path, "_blank");
    }

    return (
        <div id="PROJECTS" className='flex flex-col items-center gap-20 mb-[100px]'>
            <div className='flex flex-col items-center text-center gap-6 max-w-[750px] w-[90%]'>
                <div className='flex flex-col items-center gap-1'>
                    <h1>PROJECTS</h1>
                    <div className='w-16 h-[6px] rounded-l-full rounded-r-full bg-yellow-400'></div>
                </div>
                <h4>Here you will find some of the personal projects that I created with each project containing its own preview.</h4>
            </div>

            <div className='flex flex-col gap-20 max-w-[1200px] w-[90%]'>
                {
                    ProjectDatas.map((projectData, i) => {
                        return (
                            <div key={i} className='flex flex-col lg:flex-row gap-12 items-center'>
                                <img src={projectData.imagePath} alt="" className='w-[95%] sm:w-[70%] lg:w-[50%] h-fit' />
                                <div className='flex flex-col gap-4 max-w-[650px] text-center lg:text-start items-center lg:items-start'>
                                    <h2>{projectData.title}</h2>
                                    <p>{projectData.description}</p>
                                    <div className='flex flex-col gap-1'>
                                        <h3>Things Learned:</h3>
                                        <p>{projectData.learning}</p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <button className='button text-[16px] px-8 py-2' onClick={() => TakeToNewLink(projectData.githubLink)}>
                                            Git Link
                                        </button>
                                        <button className='button text-[16px] px-8 py-2' onClick={() => TakeToNewLink(projectData.webLink)}>
                                            Preview
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects