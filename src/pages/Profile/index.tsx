import React from "react"

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab  } from "./style"

import ProfileData from "../../components/ProfileData"
import RepoCard from "../../components/RepoCard"
import RandomCaledar from "../../components/RandomCalendar"

const Profile: React.FC = () => {
    
    const TabContent = () => (
        <div className="content">
            <RepoIcon/>
            <span className="label">Repositorios</span>
            <span className="number">35</span>
        </div>
    )

    return (
        <Container>
            <Tab className="desktop">
               <div className="wrapper">
                   <span className="offset"></span>
                    <TabContent/>
               </div>
                <span className="line"></span>
            </Tab>
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
                    <Tab className="mobile">
                        <TabContent/>
                        <span className="line"/>
                    </Tab>
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

                    <CalendarHeading>
                        Random calendar (do not represent actual data)
                    </CalendarHeading>

                    <RandomCaledar />
                </RightSide>
            </Main>
        </Container>
    )
}

export default Profile