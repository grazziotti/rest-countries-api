import styled from 'styled-components'

type Props = {
    animate?: boolean
}

export const Container = styled.div<Props>`
    margin: 4.5rem 0;

    .content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 7.2rem;
        opacity: ${props => props.animate ? 1 : 0};
        transition: opacity .3s;

        @media (min-width: 1025px) and (max-width: 1300px) {
            gap: 3rem;
        }

        @media (max-width: 1025px) {
            grid-template-columns: repeat(3 , 1fr);
        }

        @media (max-width: 980px) {
            grid-template-columns: repeat(2 , 1fr);
        }

        @media (max-width: 570px) {
            grid-template-columns: repeat(1 , 1fr);
            justify-items: center;
            gap: 4rem;
            margin-top: 3.2rem;
        }
    }
`