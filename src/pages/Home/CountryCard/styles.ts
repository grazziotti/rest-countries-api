import styled from 'styled-components'

export const Container = styled.div`
    max-height: 35.1rem;
    overflow: hidden;
    border-radius: .4rem;
    background-color: ${props => props.theme.colors.element};
    box-shadow: ${props => props.theme.elementShadow};
    transition: transform .3s;

    &:hover {
        transform: scale(1.1);
    }
    
    a {
        color: ${props => props.theme.colors.textPrimary};
        
        .country-flag {
            height: 50%;
            overflow: hidden;
            
            img {
                height: 100%;
            }
        }

        .country-info {
            height: 50%;
            padding: 2.4rem;
            
            h4 {
                margin-bottom: 1.6rem;
                font-size: 1.8rem;
                font-weight: 800;
                text-overflow: ellipsis;
                overflow-x: hidden;
                white-space: nowrap;
            }
            
            p {
                margin-bottom: .8rem;
                font-size: 1.4rem;
                font-weight: 600;

                span {
                    font-weight: 300;
                }
            }

        }
    }
`