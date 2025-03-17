import { Content, ContentMe, Description, Links, Me, Title } from "./index.styled"
import me from '../../img/me.jpg'
import { WrapperLinks } from "../AppBar/WrapperLinks"
import { useSelector } from "react-redux"
import { stateType } from "../../redux/store"
import { memo } from "react"
import Resume from "../Resume/Resume"

export default memo(function Main() {

    const main = useSelector((state: stateType) => state.appReducer.language.main)
    const links = useSelector((state: stateType) => state.appReducer.language.links)
    const theme = useSelector((state: stateType) => state.appReducer.theme)

    const lang = main.title === "Hello"

    const fontSize = lang ? "95px" : "70px"

    return <Content>
        <ContentMe>
            <Me>
                <img src={me} alt="me" />
            </Me>
            <Description>
                <Title fontWeight="800" fontSize={fontSize} mb="15px">{main.title}</Title>
                <Title fontWeight="700" fontSize="25px" mb='7px'><i>{main.about}</i></Title>
                <Title fontWeight="600" fontSize="15px" mb='15px' width='350px'>
                    <i>{main.descr}</i>
                </Title>
                <Links>
                    <WrapperLinks links={links} theme={theme.status} />
                </Links>
            </Description>

        </ContentMe>
        
        <Resume />
    </Content>

})

