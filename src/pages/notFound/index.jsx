import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Styled.Wrapper role="main" aria-labelledby="nf-title">
            <Styled.Inner>

                <Styled.Code>404</Styled.Code>
                <Styled.Title id="nf-title">Page not found</Styled.Title>
                <Styled.Subtitle>
                    The page you're looking for may have moved, been renamed, or never existed.
                </Styled.Subtitle>

                <Styled.Actions>
                    <Styled.Button
                        onClick={() => navigate(-1)}
                        aria-label="Go back"
                    >Go back</Styled.Button>
                    <NavLink
                        to="/"
                    ><Styled.Button as="span">Go home</Styled.Button></NavLink>
                </Styled.Actions>

                <Styled.Small>
                    Availability: Open to full-time roles (Bengaluru/remote) & select freelance projects.
                </Styled.Small>
            </Styled.Inner>
        </Styled.Wrapper>
    );
};

export default NotFound;
