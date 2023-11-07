import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Sidebar() {
  const { isAuthenticated } = useAuth0();

  return (
    <List color="#D7DBDD" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="#D7DBDD" />
          Dashboard
        </NavLink>
      </ListItem>
      {isAuthenticated && (
        <>
          <ListItem>
            <NavLink to="create">
              <ListIcon as={EditIcon} color="#D7DBDD" />
              Add New Book
            </NavLink>
          </ListItem>

          <ListItem>
            <NavLink to="profile">
              <ListIcon as={AtSignIcon} color="#D7DBDD" />
              Profile
            </NavLink>
          </ListItem>
        </>
      )}
    </List>
  );
}
