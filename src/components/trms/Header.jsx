import react from 'react';
import { useSelector } from 'react-redux';
import './trmscss/header.css';

function Header() {
    const selectedUser = useSelector((state) => state.user.selectedUser);
    return (
        <div className="header">
            <h1>{selectedUser ? `Welcome, ${selectedUser.name} `: 'No user selected'}</h1>
        </div>
    );
};
export default Header;