import './navbar.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
let page;
function determinePage () {
    if (window.location.pathname === '/') {
        page = 'home';
    } else if (window.location.pathname === '/settings') {
        page = 'settings';
    } else {
        console.log("failed to get page");
    }
}
export function NavBar() {
    determinePage();
    if (page === 'home') {
        return (
            <>
            <div id='nav'>
                <ul>
                    <li id='settingsIcon'><a href="/settings">Settings</a></li>
                    <li><a href="/">Home</a></li>
                    
                </ul>
            </div>
            </>
        );
    } else if (page === 'settings') {
        return (
            <>
            <div id='nav'>
                <ul>
                    <li id="homeIcon"><a href="/">Home</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </div>
            </>
        );
    }
}
