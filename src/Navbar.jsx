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
            <div id='nav'>
                <div className="fixed h-[130px] mx-20 bg-[#181818] rounded-[20px] opacity-100" />
                <ul>
                    <li><a href="/settings">Settings</a></li>
                    <li><a href="">open about:blank</a></li>
                    
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
                    <li><a href="">open about:blank</a></li>
                </ul>
            </div>
            </>
        );
    }
}
