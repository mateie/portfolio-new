import { Button, Flex, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <Flex direction="column" align="center" justify="center" gap="lg">
            <Title order={1}>😿 404 - Page not found</Title>
            <Button
                variant="light"
                size="lg"
                color="green"
                onClick={() => navigate("/")}
            >
                Go to home page
            </Button>
        </Flex>
    );
};

export default ErrorPage;
