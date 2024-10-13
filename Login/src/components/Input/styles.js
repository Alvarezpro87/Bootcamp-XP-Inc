import styled from "styled-components";

export const InputContainer = styled.div`
    widtgth: 100%;
    max-width: 275px;    
    height: 32px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    input {
        background: transparent;
        border: 0;
        width: 90%;
        height: 62px;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 20px
    }
`
export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background: transparent;
    width: 100%;
    border: 0;
    height: 30px;
    color: #FFFFFF;
`