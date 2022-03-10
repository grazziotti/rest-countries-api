import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 7.2rem;
    margin: 4.5rem 0;

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
`