import React from "react"
import {Link} from "react-router-dom"

import {
    Container, 
    Breadcrunb, 
    RepoIcon,  
    Stats, 
    StarIcon, 
    ForkIcon, 
    LinkButton, 
    GithubIcon
} from "./style"

const Repo: React.FC = () => {
    return (
        <Container>
            <Breadcrunb>
                <RepoIcon /> 

                <Link className={'username'} to={'/miqueiasbelfort'}>
                    Miqueiasbelfort
                </Link>

                <span>/</span>

                <Link className={'reponame'} to={"/miqueiasbelfort/reponame"}>
                    PlusClass
                </Link>
            </Breadcrunb>

            <p>Contains all of my Youtube lessons code.</p>
            
            <Stats>
                <li>
                    <StarIcon/>
                    <b>9</b>
                    <span>starts</span>
                </li>
                <li>
                    <ForkIcon />
                    <b>0</b>
                    <span>forks</span>
                </li>
            </Stats>

            <LinkButton href={'http://github.com/miqueiasbelfort/'}>
                <GithubIcon/>
                <span>View on Github</span>
            </LinkButton>
        </Container>
    )
}
export default Repo