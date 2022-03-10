import styled from 'styled-components'

export const Container = styled.main`
    margin: 8rem 0;
    
    a, .back-btn {
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
            max-height: 40rem;
            flex: 1;

            img {
                height: 100%;
            }
        }
        
        .country-detail--info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
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

    @media (max-width: 1025px) {
        .country-detail {
            .country-detail--flag {                
                img {
                    height: auto;
                }
            }
            
            .country-detail--info {
                .country-detail--borders {
                    margin-top: 4rem;
                }
                
                .country-detail--list {
                    flex-direction: column;
                }
            }   
        }
    }

    @media (max-width: 980px) {
        margin-top: 4rem;
        
        .country-detail {
            flex-direction: column;

            .country-detail--flag {
                text-align: center;

                img {
                    max-width: 60rem;
                    max-height: inherit;
                }
            }

            .country-detail--info {
                margin-left: 0;
                margin-top: 4rem;

                .country-detail--list {
                    ul:nth-child(2) {
                        margin-top: 4rem;
                    }
                }
            }
        }
    }
`