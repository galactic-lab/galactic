import './index.css';
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
                <div className="Rectangle2 fixed top-5 left-5 right-5 h-32 opacity-75 bg-neutral-900 rounded-2xl" />
                <ul>
                    <li><a href="/settings">Settings</a></li>
                    <li><a href="">open about:blank</a></li>
                    
                </ul>
            </>
        );
    } else if (page === 'settings') {
        return (
            <>
            <div id='nav'>
                <ul>
                    <li id="homeIcon"><a href="/">Home</a></li>
                    <li><a href="">open about:blank</a></li>
                </ul>
            </div>
            </>
        );
    }
}
