import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LogoutButton from "./login/LogoutButton";
import LoginModal from "./login/LoginModal";

import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Navbar() {
  const { user, isLoggedIn } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ fontWeight: "500", flexGrow: 1 }}>
          📌 {user?.username ? user.username : "SE25"}'s Tasks
        </Typography>
        {isLoggedIn ? <LogoutButton /> : <LoginModal />}
      </Toolbar>
    </AppBar>
  );
}
