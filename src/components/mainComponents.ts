import styled from 'styled-components'

export const PageContainer = styled.div`
    max-width: 130rem;
    width: 100%;
    margin: auto;

    @media (max-width: 1350px) {
        padding: 0 4rem;
    }

    @media (max-width: 570px) {
        padding: 0 3.2rem;
    }
`