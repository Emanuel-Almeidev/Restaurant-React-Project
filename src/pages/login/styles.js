import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 430px;
    margin: 70px auto;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;

    img{
        margin: 0 auto;
        margin-bottom: 40px;
    }

    h3{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        color: rgba(0, 0, 0, 0.87);
        margin-bottom: 20px;
    }

    p{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: rgba(0, 0, 0, 0.54);
        margin-bottom: 30px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    input{
        height: 56px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        margin-bottom: 24px;
        padding-left: 10px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.88);

        &:focus{
            border: 3px solid #FF8822 
        }
    }

    a{
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;  
        text-align: center;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.88);
        margin: 10px 0 30px 0;
    }

    button{
        width: 328px;
        height: 48px;
        border-radius: 100px;
        border: none;
        background: #FF8822;
        color: #FFF;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        margin: 0 auto;
        cursor: pointer;
    }
`;
