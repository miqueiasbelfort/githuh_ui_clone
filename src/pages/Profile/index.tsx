import React from "react"

import { Container, Main, LeftSide, RightSide  } from "./style"

import ProfileData from "../../components/ProfileData"

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

                <RightSide></RightSide>
            </Main>
        </Container>
    )
}

export default Profile