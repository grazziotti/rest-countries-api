import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    max-width: 45rem;
    width: 100%;
    border-radius: .4rem;
    background-color: ${props => props.theme.colors.element};

    form {
        display: flex;
        align-items: center;
        width: 100%;
        height: 5.6rem;
        padding-left: 3.2rem;
        box-shadow: ${props => props.theme.elementShadow};
        
        svg {
            height: 1.6rem;
            color: ${props => props.theme.colors.textPrimary};
        }

        input {
            width: 100%;
            margin-left: 2rem;
            font-size: 1.4rem;
            font-weight: 600;
            color: ${props => props.theme.colors.textPrimary};

            &::placeholder {
                color: ${props => props.theme.colors.textPrimary};
            }
        }
    }
`