import React from 'react';
import { Container, Input, Break , Button, Text } from './styles/opt-form';

function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

OptForm.Input = function OptFormInput({ ...restProps }) {
    return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children} <i className="fas fa-chevron-right" style={{marginLeft: "10px"}}> </i>
        </Button>
    )
}

OptForm.Break = function OptBreak({ ...restProps }) {
    return <Break {...restProps} />;
}


OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

export default OptForm