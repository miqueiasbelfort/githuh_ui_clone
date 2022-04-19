import React, {useState} from "react"
import {Container, GithubLogo, SeachForm} from "./styles"
import {useNavigate} from "react-router-dom"

const Header: React.FC = () => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event: React.FormEvent){
        event.preventDefault()
        navigate("/" + search.toLowerCase().trim())
    }

    return (
        <Container>
            <GithubLogo />
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