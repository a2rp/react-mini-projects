import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    `,
    Main: styled.div`
        width: 100%;
        max-width: 900px;

        h3 {
            color: #fff;
        }

        p {
            margin-bottom: 30px;

            b {
                color: lightcoral;
                margin-top: 15px;
                display: block;
            }
        }

        ul {
            margin-left: 15px;
            margin-bottom: 30px;

            li {
                a {
                    color: lightcoral;
                    text-decoration: none;
                    padding: 3px;
                    border-bottom: 1px solid #fff;
                    text-decoration: none;
                    &:hover {
                        border: none;
                    }
                }
            }
        }
    `,
};
