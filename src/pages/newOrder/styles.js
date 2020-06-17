import styled from 'styled-components';

export const Container = styled.div`
    width: 75%;
    margin-left: 25%;
    padding-top: 70px;
    background-image: linear-gradient(to right, #FFFFFF 0%, #FFFFFF 50%, #FAFAFA 50%, #FAFAFA 100%);
    display: flex;
    height: 100%;
    overflow: hidden;

`;

export const LineOrange = styled.div`
    background: #FF8822;
    margin: 5px 0;
    height: 2px;
    width: 224px;
    
`;

export const ResumeOrder = styled.div`
    width:37.5%;
    position: fixed;
    height: 100vh;
    padding: 0 40px;

    h4{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
        color: rgba(0, 0, 0, 0.88);
    }

    h3{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
        color: rgba(0, 0, 0, 0.87);
    }

    > div:nth-child(1){
        position: relative;
        margin-bottom: 20px;

        a{
            position: absolute;
            top: -25px;
        }
    }

    
`;

export const CreateOrder = styled.div`
    width:100%;
    margin-left: 50%;
    
    
    h3{
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
        color: rgba(0, 0, 0, 0.87);
    }
    

    > div {
        padding: 0 40px;

        span, p{
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color: rgba(0, 0, 0, 0.56);
            margin: 15px 0;
        }

        > h6{
            margin-top: 25px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            color: rgba(0, 0, 0, 0.88);
        }
        
    }
    > button{
        display: flex;
        justify-content: space-between;
        align-items:center;
        cursor: pointer;
        position: fixed;
        bottom: 0;
        height: 56px;
        background: #FF8822;
        box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.2);
        border: none;
        font-family: Open Sans;
        width: 37.5%;
        font-size: 16px;
        line-height: 24px;
        color: #fff;
        padding: 0 30px;
    }
`;

export const ProgresseBar = styled.div`
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 50px;
    display: flex;
    height: 12px;
    margin: 15px 0;

    &::before{
        border-radius: 50px;
        content: "";
        width: ${props => props.progress}%;
        background-color: #FF8822;
    }
`;


export const SearchBox = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.34);
    margin-top: 20px;
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

export const ProductList = styled.div`
    margin-bottom: 70px;
    > div{
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

export const ProductCard = styled.button`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    img{
        width: 40px;
        border-radius: 50%;
    }

    h6{
        margin-left: 15px;
        margin-right: auto;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.87);
    }

    span{
        margin-left: auto; 
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.54);
    }

    p{
        
    }
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