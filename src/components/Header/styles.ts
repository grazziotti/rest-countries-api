import styled from 'styled-components'

export const HeaderArea = styled.header`
    background-color: ${props => props.theme.element};
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 8rem;
        color: ${props => props.theme.fontColorPrimary};

        .title {
            font-size: 2.4rem;
            font-weight: 800;
        }

        .toggle-theme-btn {
            display: flex;
            align-items: center;
            margin-left: .8rem;
            font-size: 1.6rem;
            font-weight: 600;
            color: inherit;

            img {
                width: 1.8rem;
                margin-right: .8rem;
                transform: translateY(-1px);
            }
        }
    }
`