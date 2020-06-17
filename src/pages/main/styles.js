import styled from 'styled-components';


export const Container = styled.div`
    width: 75%;
    margin-left: 25%;
    padding: 70px 40px;

    div{
        h3{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
        color: rgba(0, 0, 0, 0.88);
        }
    }

`;

export const LineOrange = styled.div`
    background: #FF8822;
    margin: 5px 0;
    height: 2px;
    width: 224px;
`;

export const CardOrder = styled.div`
    margin-top: 15px;
    background: #FFFFFF;
    box-shadow: 0px 0.5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 15px;
    display: flex;
    align-items: center;

    span{
        padding-left: 20px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        color: rgba(0, 0, 0, 0.56);
    }

    img{
        border-radius: 50%;
        width: 45px;
    }

    > div{
        width: 100%;
        margin-left: 15px;

        > div{
            display: flex;
            justify-content: space-between;

            h6{
                font-size: 16px;
            }

            span{
                font-size: 16px;
                color: #000
            }
        }

        p{
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            color: rgba(0, 0, 0, 0.64);
        }
    }
`;

export const SearchBox = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.34);
    margin: 20px 0;
    padding: 10px 0;
    display: flex;
    align-items: center;
    

    input{
        margin-left: 15px;
        margin-right: auto;
        border: none; 
        background: none; 
        font-size: 16px; 
    }
    
`;

export const DayOrders = styled.div`
    margin-bottom: 20px;
    width: 100%;

    a{
        text-decoration: none;
        transform: none;
    }

`;

export const Orders = styled.div`

`;

