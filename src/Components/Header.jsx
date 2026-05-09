function Header(props){

    return(
        <header>
            <h1 className="headerTitle"> {props.headertitle} </h1>
            {/* <nav className="navigationTabs">
                <a href="#Home"> Home </a>
                <a href="#About"> About </a>
            </nav> */}
            <hr></hr>
        </header>
    );
}

export default Header