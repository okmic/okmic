import React from "react"
import { LinkBall } from "../Main/index.styled"
import { Link } from "react-router-dom"

type PropsType = {
    setOpen?: (ser: boolean) => void
    links: {
        cv: string
        projects: string
        offer: string
    }
    theme: boolean
}

export const WrapperLinks: React.FC<PropsType> = ({ setOpen, links, theme }) => {
    const renderLink = (href: string, text: string, backgroundColor: string) => (
        <a href={href} onClick={setOpen ? () => setOpen(false) : undefined}>
            <LinkBall background={backgroundColor} color="#333333">
                {text}
            </LinkBall>
        </a>
    )

    return (
        <>
            {renderLink("#Curriculum-Vitae", links.cv, theme ? '#D6D600' : '#F2B400')}  
            {renderLink("#projects", links.projects, theme ? '#FF7043' : '#FF9E80')}  
            <Link to="/offer"><LinkBall background={theme ? '#4FC3F7' : '#81D4FA'} color="#333333">{links.offer}</LinkBall></Link>
        </>
    )
}
