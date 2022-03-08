import styled from 'styled-components'

export const Container = styled.main`
    margin-top: 8rem;
    
    a {
        border-radius: .4rem;
        box-shadow: ${props => props.theme.title === 'light' 
            ? '0px 0px 5px #ccc'
            : '0px 0px 5px #111'
        };
        background-color: ${props => props.theme.colors.element};
        color: ${props => props.theme.colors.textPrimary};
    }
    
    .back-btn {
        padding: .8rem 4rem;
        font-size: 1.6rem;

        svg {
            margin-right: .8rem;
        }
    }
    
    .country-detail {
        display: flex;
        margin-top: 8rem;
        color: ${props => props.theme.colors.textPrimary};
        
        .country-detail--flag {
            max-width: 56rem;
            max-height: 40rem;
        }
        
        .country-detail--info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 50%;
            margin-left: 12rem;
            
            .country-detail--name {
                font-size: 3.6rem;
            }
            
            .country-detail--list {
                display: flex;
                justify-content: space-between;
                margin-top: 4rem;
                
                ul {
                    li {
                        margin-bottom:  1.2rem;
                        font-size: 1.6rem;
                        font-weight: 600;
                        color: ${props => props.theme.colors.textPrimary};
                        
                        span {
                            font-weight: 300;
                        }
                    }
                }
            }
            
            .country-detail--borders {
                display: flex;
                flex-wrap: wrap;
                gap: .8rem;
                margin-top: 7.2rem;
                
                p {
                    padding-top: .4rem;
                    font-size: 1.6rem;
                    font-weight: 600;
                }
                
                a {
                    min-width: 9.5rem;
                    padding: .8rem;
                    font-size: 1.4rem;
                    text-align: center;
                }
            }
        }
    }
`