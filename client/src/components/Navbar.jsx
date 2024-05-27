
import {AppBar, Toolbar, styled} from "@mui/material";

import {NavLink} from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111
`

const Tabs = styled(NavLink)`
    font-size: 30px;
    margin-right: 1150px;
    color: inherit;
    text-decoration: none
`
const Tab = styled(NavLink)`
    color: inherit;
    text-decoration: none;
    font-size: 20px;
    margin: 10px;
`

const Navbar = () => {
    return (
        <div>
            <Header position="static">
                <Toolbar>
                <Tabs to='/'>CRUD APP</Tabs>
                <Tab to='/add'>Add User</Tab>
                <Tab to='all'>All User</Tab>
                </Toolbar>
            </Header>
        </div>
    )
}

export default Navbar;