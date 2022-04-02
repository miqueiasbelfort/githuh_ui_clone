import React from "react"

import { Container, Main, LeftSide, RightSide, Repos  } from "./style"

import ProfileData from "../../components/ProfileData"
import RepoCard from "../../components/RepoCard"

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData
                        username={"MiqueiasBelfort"}
                        name={'Miqueias Belfort'}
                        avatarUrl={"https://avatars.githubusercontent.com/u/79981066?v=4"}
                        followers={877}
                        following={7}
                        company={"Nubank"}
                        location={"Basília, Brazil"}
                        email={"miqueiasbelfort8323@gmail.com"}
                        blog={"https://miqueiasbelfor.netlefy.app"}
                    />
                </LeftSide>

                <RightSide>
                    <Repos>
                        <h2>Random repos</h2>

                        <div>
                            {[1,2,3,4,5,6].map(n => (
                                <RepoCard 
                                    key={n}
                                    username={"miqueiasbelfort"}
                                    reponame={"Pluss-Create"}
                                    description={"Um lugar onde professore podem..."}
                                    language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                                    stars={8}
                                    forks={4}
                                />
                            ))}
                        </div>
                    </Repos>
                </RightSide>
            </Main>
        </Container>
    )
}

export default Profile