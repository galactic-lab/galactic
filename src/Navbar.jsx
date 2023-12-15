import './navbar.css';
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
function navBar() {
    determinePage();
    if (page === 'home') {
        return (
            <>
            <div>
                <ul>
                    <li><a href="/settings">Settings</a></li>
                    
                </ul>
            </div>
            </>
        );
    } else if (page === 'settings') {
        return (
            <>
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </div>
            </>
        );
    }
}

