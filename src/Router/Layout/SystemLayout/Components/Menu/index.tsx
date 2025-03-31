import { Logout } from "@mui/icons-material";
import { Avatar, Grow, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from "@mui/material";
import { useState } from "react";
import { useAuthStore } from "store/auth-store";
import { MenuContainer } from "./styles";

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout, user } = useAuthStore();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuContainer>
      <Stack direction="row" alignItems="center">
        <p className="welcome-text">Bem vindo, {user}</p>
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{
              width: 38,
              height: 38,
              backgroundColor: "#687bea",
              color: "#fff",
            }}
          >
            {user?.[0] || ""}
          </Avatar>
        </IconButton>
      </Stack>

      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slots={{
          transition: Grow,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={() => logout()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sair</ListItemText>
        </MenuItem>
      </Menu>
    </MenuContainer>
  );
};
