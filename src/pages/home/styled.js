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
    `,
    SearchWrapper: styled.div`
        border: 1px solid #333;
        height: 40px;
        position: relative;
        border-radius: 6px;

        input {
            border: none;
            outline: none;
            height: 100%;
            background-color: inherit;
            width: 100%;
            padding: 0 50px 0 15px;
            color: #aaa;
        }

        .clearButton {
            /* border: 1px solid #f00; */
            position: absolute;
            height: 100%;
            width: 50px;
            right: 0;
            top: 0;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
            }
        }
    `,
    AppsWrapper: styled.div`
        /* border: 1px solid #f00; */
        margin-bottom: 50px;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;

        a {
            display: flex;
            text-decoration: none;
            color: inherit;
            width: 300px;
            padding: 50px 0;
            transition: transform 0.2s ease;
            &:hover {
                transform: translateY(-5px);
            }

            .appLinkWrapper {
                border: 1px solid #333;
                border-radius: 12px;
                padding: 16px;

                h2 {
                    margin: 0 0 6px;
                }
                p {
                    opacity: 0.8;
                    font-size: 14px;
                }
                .tags {
                    margin-top: 8px;
                    font-size: 12px;
                    opacity: 0.7;
                }
            }
        }
    `,
    AboutWrapper: styled.div`
        margin-top: 50px;

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
