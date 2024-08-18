import { Button, Flex } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const links = [
    {
        title: "Home",
        to: "/",
    },
    {
        title: "About",
        to: "/about",
    },
    {
        title: "Contact",
        to: "/contact",
    },
];

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <Flex
            direction="column"
            align="center"
            gap="20px"
            className="px-8 pt-8 shadow-2xl border-r border-r-red-600/50"
        >
            {links.map((link) => (
                <Button
                    variant="transparent"
                    color="red"
                    size="xl"
                    key={link.to}
                    fullWidth
                    onClick={() => navigate(link.to)}
                >
                    {link.title}
                </Button>
            ))}
        </Flex>
    );
};

export default Sidebar;
