import React, {useState} from "react"
import {Container, GithubLogo, SeachForm} from "./styles"
import {useNavigate} from "react-router-dom"

import { ThemeName } from "../../styles/Themas"

interface Props {
    themeName: ThemeName;
    setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({themeName, setThemeName}) => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event: React.FormEvent){
        event.preventDefault()
        navigate("/" + search.toLowerCase().trim())
    }

    function toggleTheme(){
        setThemeName(themeName === 'light' ? 'dark': 'light')
    }

    return (
        <Container>
            <GithubLogo onClick={toggleTheme}/>
            <SeachForm onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter Usename or Repo..."
                    value={search}
                    onChange={e => setSearch(e.currentTarget.value)}
                />
            </SeachForm> 
        </Container>
    )
}

export default Header