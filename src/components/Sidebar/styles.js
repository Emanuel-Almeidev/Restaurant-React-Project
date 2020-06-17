import styled from 'styled-components';

export const Aside = styled.aside`
    position: fixed;    
    z-index: 1;

    padding-top: 10px;
    height: 100%;
    width: 25%; 
    background: #FF8822;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);

    img{
        margin: 50px auto;
    }
`;

export const Menu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;


    a{
        text-decoration: none;

        &:nth-child(${props => props.active + 1}){
            button{
                background: #FFF;

                span{
                    color: #FF8822;
                }
            }
        }
    }
`;

export const Button = styled.button`
    background: #FF8822; 
    height: 56px;
    width: 100%;
    border: none;
    margin-top: 2px;
    display:flex;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;


    span{
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        color: ${props => props.color ||'#FFF'};
    }

    img{
        margin: 0 25px;
    }

    }
`;