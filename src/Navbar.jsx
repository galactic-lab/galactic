import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faArrowUpRightFromSquare, faHouse } from '@fortawesome/free-solid-svg-icons'
let page;
function determinePage () {
    if (window.location.pathname === '/') {
        page = 'home';
    } else if (window.location.pathname === '/settings') {
        page = 'settings';
    } else if (window.location.pathname === '/view') {
        page = 'view'
    } else {
        console.error('Failed to get page')
    }
}
export default function NavBar() {
    determinePage();
    if (page === 'home') {
        return (
            <>
                {/*<nav className="Rectangle2 fixed top-5 left-5 right-5 h-32 opacity-75 bg-neutral-900 rounded-2xl flex items-center pr-14 pl-14" />
                <ul className="flex justify-around w-full items-center list-none">
                    <li><a href="/settings"><FontAwesomeIcon icon={faGear} style={{color: "#ffffff",}} className="fixed w-[35px] h-[38px]"/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#ffffff",}} className="fixed w-[35px] h-[38px]" /></a></li>
                </ul>
                <div className="w-[277px] h-[80px]">
                    <div className="fixed w-[277px] top-10 mx-auto font-lexend [text-shadow:0px_0px_24.93px_ #ffffff] font-medium text-[#ffffff] text-[64px] tracking-[-0.64px] leading-[normal]">
                        Galactic
                    </div>
                </div>*/}
                <div className="navbar bg-neutral-900 top-5 left-5 right-5 h-32 rounded-2xl opacity-75 flex">
                    <div className="navbar-start">
                        <div className="dropdown">
                        </div>
                    </div>
                    <div className="navbar-center">
                        <a className="btn btn-ghost font-inter font-medium text-[#ffffff] text-[64px]">Galactic</a>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        </div>
                        </button>
                    </div>
                    </div>
            </>
        );
    } else if (page === 'settings') {
        return (
            <>
                <nav
                    className="Rectangle2 fixed top-5 left-5 right-5 h-32 opacity-75 bg-neutral-900 rounded-2xl flex items-center pr-14 pl-14"/>
                <ul className="flex justify-around w-full items-center list-none">
                    <li><a href="/"><FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}}
                                                     className="fixed w-[35px] h-[38px]"/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#ffffff",}}
                                                     className="fixed w-[35px] h-[38px]"/></a></li>
                </ul>
                <div className="w-[277px] h-[80px">
                    <div className="fixed w-[277px] top-5 left-5 font-lexend [text-shadow:0px_0px_24.93px_ #ffffff] font-medium text-[#ffffff] text-[64px] tracking-[-0.64px] leading-[normal]">
                        Galactic
                    </div>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <head></head>
            </>
        )
    }
}