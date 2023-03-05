import { Button, Navbar } from "react-bootstrap";
import { User } from "../models/user";
import * as NotesApi from "../network/notes_api";

interface NavBarLoggedOutViewProps {
    onSignUpClicked: () => void,
    onLoginClicked: () => void,
}

const NavBarLoggedOutView = ({onSignUpClicked, onLoginClicked} : NavBarLoggedOutViewProps) => {
    return (
        <>
            <Button onClick={onSignUpClicked} >
                SignUp
            </Button>
            <Button onClick={onLoginClicked}>
                Login
            </Button>
        </>
    );
}

export default NavBarLoggedOutView;