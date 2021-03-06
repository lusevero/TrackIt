import styled from "styled-components"
import axios from "axios"
import { useState, useContext, useEffect } from "react"

import TokenContext from "../../contexts/TokenContext"
import UserContext from "../../contexts/UserContext"

import Loading from "../loadings/PageLoading"
import TopBar from "../logged/TopBar"
import FooterNav from "../logged/FooterNav"
import CreateHabits from "./habitspage/CreateHabits"
import AllHabits from "./habitspage/AllHabits"

import { Body, Main, SectionInfo} from "../logged/style"



export default function HabitsPage() {
    const { token } = useContext(TokenContext);
    const { progress } = useContext(UserContext);


    const [isLoading, setIsLoading] = useState(true)
    const [allHabits, setAllHabits] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", token)

        promisse.then((res) => {
            setAllHabits(res.data);
            setIsLoading(false)
        }
        )
    }, []) //Funcionando

    function refreshHabits() {
        setIsLoading(true)
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", token)

        promisse.then((res) => {
            setAllHabits(res.data);
            setIsLoading(false)
        })
    }


    return (
        <Body>
            <TopBar />
            <Main>
                <CreateHabits refreshHabits={refreshHabits} />
                {isLoading
                    ? <Loading />
                    : <>                    
                    {(allHabits.length > 0)
                        ? <AllHabits allHabits={allHabits} refreshHabits={refreshHabits} setAllHabits={setAllHabits} />
                        : <SectionInfo>
                            <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
                        </SectionInfo>
                    }
                    </>

                }
            </Main>
            <FooterNav />
        </Body>
    )
}
const CreateSection = styled.section`
    display:flex;
    flex-direction: column;
    font-weight: 400;
`
const Container = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    > button{
        display:flex;
        align-items:center;
        justify-content:center;
        font-size: 26.976px;
        line-height: 34px;
        color: #FFFFFF;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
    }
`
const HabitCard = styled.div`
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    padding: 18px;
    width: 100%;
    min-height: 180px;
    font-weight: 400;
    div:first-of-type{
        margin-top: 8px;
    }
    div:last-of-type{
        margin-top: 20px;
        display:flex;
        align-items:center;
        justify-content:flex-end;
    }
`
const DayButtons = styled.button`
    margin: 0 2px;
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    :first-of-type{
        margin-left: 0px;
    }
    :last-of-type{
        margin-rigth: 0px;
    }
`
const CardButton = styled.button`
    font-size: 15.976px;
    line-height: 20px;
    &.cancel{
        color: #52B6FF;
    }
    &.save{
        margin-left: 23px;
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px; 
        color: #FFFFFF;
    }
`
const HabitsSection = styled.section`
`