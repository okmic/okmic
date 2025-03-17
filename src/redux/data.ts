import telegram from '../img/skills/telegram.png'
import canvas from '../img/Canvas.jpg'
import hadidja from '../img/Hadidja.jpg'
import gb from '../img/gb.jpg'
import node from '../img/skills/nodejs.png'
import db from "../img/skills/db.png"
import react from '../img/skills/react.png'
import unix from '../img/skills/unix.png'
import docker from "../img/skills/docker.png"
import python from "../img/skills/python.png"
import kubernetes from "../img/skills/kubernetes.svg"
import microservices from "../img/skills/microservices.png"
import canvasD from '../img/canvasPage.png'
import canvasM from '../img/canvasMobile.png'
import hadidjaD from '../img/hadidjaPage.png'
import hadidjaM from '../img/hadidjaMobile.png'
import { dataType, InitTypeBrowser } from '../types/types'


export const DataEng: dataType = {
    order: "Eng",
    offer: {
        title: "Offer",
        services: [
            {
              "title": "High-Performance Applications",
              "description": "Development of server-side solutions using Node.js (Express, Fastify, Nest). Building scalable APIs for mobile and web applications."
            },
            {
              "title": "Database Optimization",
              "description": "Working with relational (PostgreSQL, MySQL) and NoSQL (MongoDB) databases. Speeding up queries and simplifying maintenance using ORM (Prisma, TypeORM)."
            },
            {
              "title": "Process Automation",
              "description": "Developing Telegram bots for customer support and notifications. Creating Python scripts to automate routine tasks."
            },
            {
              "title": "Modern Interfaces",
              "description": "Developing responsive and fast user interfaces using React and Next.js. Creating intuitive dashboards, e-commerce platforms, and corporate portals."
            },
            {
              "title": "DevOps and Microservices",
              "description": "Setting up CI/CD, containerization (Docker), and Kubernetes management. Developing microservice architectures for flexible and reliable solutions."
            },
            {
              "title": "Training and Consulting",
              "description": "Training your team on modern technologies. Consulting on process optimization and implementation of new solutions."
            }
        ]
    },
    linksTitle: {
        t1: 'Link to the deployed version',
        t2: 'Repository link',
    },
    main: {
        title: '👋',
        about: '✨ About Me',
        descr: "I have always been inspired by the idea of creating solutions that can change everyday life. Since 2017, I have been working in software engineering, exploring new technologies and approaches to bring value to users and society."
    },
    header: {
        name: "Michael Okhtov"
    },
    links: {
        cv: 'CV',
        projects: "Projects",
        offer: "Offer"
    },
    footer: {
        phone: "Call me",
        email: 'Email',
        writeMe: "Text me"
    },
    cv: {
        "title": "Experience and Education",
        "cv": [
            {
                "about": "*20.07.2016 - 26.06.2021*",
                "descr": "Bachelor's degree in Applied Informatics. Diploma in Information Systems."
            },
            {
                "about": "*23.07.2011 - 25.06.2015*",
                "descr": "Vocational education. Diploma in Information Systems. Qualification: Information Systems Technician."
            },
            {
                "about": "*2019 - 2021*",
                "descr": "North Caucasus State Academy (SKGA) - Automation of internal processes using Python and Node.js, training employees and students in relational database management, and enhancing qualifications in working with local, secure networks."
            },
            {
                "about": "*2022 - Present*",
                "descr": "ConvertMe - Working in an organization focused on digital technologies, developing high-performance, scalable applications on a microservices architecture."
            },
            {
                "about": "Outsourcing Development",
                "descr": "40+ outsourcing projects completed in various fields. Active participation in open-source projects on GitHub and involvement in numerous hackathons."
            }
        ],
        skills: {
            "title": "Technical Stack",
            "skill": [
                {
                    "img": node,
                    "descr": "Develop high-performance server applications using Node.js and frameworks like Express, Fastify, and Nest. This enables the creation of flexible and scalable solutions that meet business requirements."
                },
                {
                    "img": db,
                    "descr": "Optimize work with relational and document-oriented databases using ORM (Prisma, TypeORM, MikroORM), which improves query performance and simplifies code maintenance."
                },
                {
                    "img": telegram,
                    "descr": "Experienced in developing Telegram bots using libraries like GrammY and Telegraf. This automates user interaction and enhances user experience."
                },
                {
                    "img": react,
                    "descr": "Create fast and responsive user interfaces using React, ensuring a smooth and high-performance experience for end users."
                },
                {
                    "img": unix,
                    "descr": "Deep understanding of Unix-like systems: server configuration, scripting for automation (CI/CD, monitoring), which boosts team productivity."
                },
                {
                    "img": python,
                    "descr": "Use Python for process automation and scripting, reducing time spent on routine tasks and increasing overall efficiency."
                },
                {
                    "img": docker,
                    "descr": "Containerize applications using Docker, ensuring environment stability and portability, and simplifying deployment processes."
                },
                {
                    "img": kubernetes,
                    "descr": "Manage application deployment and scaling using Kubernetes, improving service reliability and availability."
                },
                {
                    "img": microservices,
                    "descr": "Develop applications with a microservices architecture, including HTTP and gRPC communication, enabling flexible and scalable solutions."
                }
            ]
        }
    },

    contacts: {
        title: "Contacts",
        valid: "The field cannot be empty",
        mailValid: "Invalid mail format",
        submit: 'The message has been sent',
        lebals: {
            name: 'Name',
            email: '*Email',
            message: 'Message',
            submit: 'submit'
        }
    },

    projects: {
        title: '',
        projects: [
            {
                title: 'GitHub',
                linkRep: {
                    title: 'GitHub profile link',
                    href: 'https://github.com/okmic'
                },
                img: gb,
                descr: 'While most of my projects are private, you can check out my GitHub profile, where I share open projects and templates. If you`re interested, you can see what I`ve been working on and how I`m developing as a programmer.'
            }
        ]
    },
}
export const DataRu: dataType = {
    order: "Ru",
    offer: {
        title: "Что я предлагаю?",
        services: [
            {
              title: "Высокопроизводительные приложения",
              description: "Разработка серверных решений на Node.js (Express, Fastify, Nest). Создание масштабируемых API для мобильных и веб-приложений.",
            },
            {
              title: "Оптимизация баз данных",
              description: "Работа с реляционными (PostgreSQL, MySQL) и NoSQL (MongoDB) базами. Ускорение запросов и упрощение поддержки с помощью ORM (Prisma, TypeORM).",
            },
            {
              title: "Автоматизация процессов",
              description: "Разработка Telegram-ботов для поддержки клиентов и уведомлений. Создание скриптов на Python для автоматизации рутинных задач.",
            },
            {
              title: "Современные интерфейсы",
              description: "Разработка адаптивных и быстрых пользовательских интерфейсов на React и Next.js. Создание интуитивно понятных панелей управления, интернет-магазинов и корпоративных порталов.",
            },
            {
              title: "DevOps и микросервисы",
              description: "Настройка CI/CD, контейнеризация (Docker) и управление Kubernetes. Разработка микросервисных архитектур для гибких и надежных решений.",
            },
            {
              title: "Обучение и консалтинг",
              description: "Обучение вашей команды работе с современными технологиями. Консультации по оптимизации процессов и внедрению новых решений.",
            }
        ]
    },
    linksTitle: {
        t1: 'Ссылка на развернутую версию',
        t2: 'Ссылка на репозиторий',
    },
    main: {
        title: '👋',
        about: '✨ Обо мне',
        descr: "Моя миссия: Создавать инновационные решения для реальных проблем пользователей. С 2017 года я занимаюсь программной инженерией, исследуя новые технологии и подходы, чтобы приносить пользу пользователям и обществу."
    },
    header: {
        name: "Михаил Охтов"
    },
    links: {
        cv: 'Опыт',
        projects: "Проекты",
        offer: "Оффер"
    },
    footer: {
        phone: "Позвоните мне",
        email: 'Электронная почта',
        writeMe: "Напишите мне"
    },
    cv: {
        title: "Опыт и образование",
        cv: [
            {
                "about": "*20.07.2016 - 26.06.2021*",
                "descr": "Степень бакалавра в области прикладной информатики. Диплом в области информационных систем."
            },
            {
                "about": "*23.07.2011 - 25.06.2015*",
                "descr": "Среднее профессиональное образование. Диплом в области информационных систем. Квалификация: техник информационных систем."
            },
            {
                "about": "*2019 - 2021*",
                "descr": "Северо-Кавказская государственная академия (СКГА) - Автоматизация внутренних процессов с использованием Python и Node.js, обучение сотрудников и студентов работе с реляционными базами данных, а также повышение квалификации в сфере работы с локальными, защищёнными сетями."
            },
            {
                "about": "*2022 - Настоящее время*",
                "descr": "ConvertMe - Работа в организации, занимающейся цифровыми технологиями, разработка высокопроизводительных, масштабируемых приложений на микросервисной архитектуре."
            },
            {
                "about": "Аутсорс-разработка",
                "descr": "40+ аутсорс-проектов, выполненных в различных областях. Небольшой вклад в фонд открытого исходного GitHub, участие в многочисленных хакатонах."
            }
        ],
        skills: {
            "title": "Технический стек",
            "skill": [
                {
                    "img": node,
                    "descr": "Разрабатываю высокопроизводительные серверные приложения на Node.js, используя фреймворки Express, Fastify и Nest. Это позволяет создавать гибкие и масштабируемые решения, соответствующие требованиям бизнеса."
                },
                {
                    "img": db,
                    "descr": "Оптимизирую работу с базами данных (реляционными и документно-ориентированными) с использованием ORM (Prisma, TypeORM, MikroORM), что повышает производительность запросов и упрощает поддержку кода."
                },
                {
                    "img": telegram,
                    "descr": "Имею опыт разработки Telegram-ботов с использованием библиотек GrammY и Telegraf. Это позволяет автоматизировать взаимодействие с пользователями и улучшать их опыт."
                },
                {
                    "img": react,
                    "descr": "Создаю быстрые и адаптивные пользовательские интерфейсы с использованием React, что обеспечивает удобство и высокую производительность для конечных пользователей."
                },
                {
                    "img": unix,
                    "descr": "Глубоко разбираюсь в Unix-подобных системах: настраиваю серверы, пишу скрипты для автоматизации задач (CI/CD, мониторинг), что повышает продуктивность команды."
                },
                {
                    "img": python,
                    "descr": "Использую Python для автоматизации процессов и написания скриптов, что сокращает время на рутинные задачи и повышает эффективность работы."
                },
                {
                    "img": docker,
                    "descr": "Контейнеризирую приложения с помощью Docker, что обеспечивает стабильность и переносимость окружений, упрощая процесс развертывания."
                },
                {
                    "img": kubernetes,
                    "descr": "Управляю развертыванием и масштабированием приложений с использованием Kubernetes, что повышает надежность и доступность сервисов."
                },
                {
                    "img": microservices,
                    "descr": "Разрабатываю приложения с микросервисной архитектурой, включая взаимодействие через HTTP и gRPC, что позволяет создавать гибкие и масштабируемые решения."
                }
            ]
        }
    },
    projects: {
        title: '',
        projects: [
            {
                title: 'GitHub',
                linkRep: {
                    title: 'Ссылка на профиль GitHub',
                    href: 'https://github.com/okmic'
                },
                img: gb,
                descr: 'Хотя большинство моих проектов являются приватными, вы можете заглянуть на мой профиль GitHub, где я размещаю открытые проекты и шаблоны. Если вам интересно, вы сможете увидеть, что я делал и как развиваюсь в программировании.'
            }
        ]
    },
    contacts: {
        title: "Контакты",
        valid: "Поле не может быть пустым",
        mailValid: "Неверный формат электронной почты",
        submit: 'Сообщение отправлено',
        lebals: {
            name: 'Имя',
            email: '*Электронная почта',
            message: 'Сообщение',
            submit: 'Отправить'
        }
    }

}

export const BrowserInitialState: InitTypeBrowser = {    
    links: {
        deployed: {
            href: null,
            title: null
        },
        repository: {
            href: null,
            title: null
        }
    },
    images: {
        desktopImg: null,
        mobileImg: null,
        name: ''
    },
    mainScreen: [
        { img: canvas, desktop: canvasD, mobile: canvasM, name: "Canvas", type: "Fine Art Canvas" },
        { img: hadidja, desktop: hadidjaD, mobile: hadidjaM, name: "hadidja-sweets", type: 'Hadidja Sweets' },
        { img: gb, link: 'https://github.com/okmic', desktop: null, mobile: null, name: "", type: 'GitHub' }
    ]
} 