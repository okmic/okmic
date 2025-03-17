import React from "react"
import { LinkBall } from "../Main/index.styled"
import { Link, useNavigate } from "react-router-dom"

type PropsType = {
    setOpen?: (ser: boolean) => void
    links: {
        cv: string
        offer: string
        contacts: string
    }
    theme: boolean
}

export const WrapperLinks: React.FC<PropsType> = ({ setOpen, links, theme }) => {

    const navigate = useNavigate()

    const renderLink = (hash: string, text: string, backgroundColor: string) => {
        
        return (
            <a href={hash} onClick={() => {
                navigate("/")
                setOpen && setOpen(false)
                }}>
                <LinkBall background={backgroundColor} color="#333333">
                    {text}
                </LinkBall>
            </a>
        )
    }

    return (
        <>
            {renderLink("#Curriculum-Vitae", links.cv, theme ? '#D6D600' : '#F2B400')} 
            <Link to="/offer"  onClick={setOpen ? () => setOpen(false) : undefined}><LinkBall background={theme ? '#FF7043' : '#FF9E80'} color="#333333">{links.offer}</LinkBall></Link>
            {renderLink("#bottom", links.contacts, theme ? '#4FC3F7' : '#81D4FA')} 
        </>
    )
}
