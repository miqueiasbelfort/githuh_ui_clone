import React from "react"
import {Container, GithubLogo, SeachForm} from "./styles"

const Header: React.FC = () => {
    return (
        <Container>
            <GithubLogo />
            <SeachForm>
                <input type="text" placeholder="Enter Usename or Repo..."/>
            </SeachForm>
        </Container>
    )
}

export default Header