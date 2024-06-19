import navimage from "/public/navimage.png"

function Nav(){

    return(
        <>
            <div className="navbar">

                <img src={navimage} alt="logo"></img>
                <div className="buttondiv">
                <button className="navbuttons">Home</button>
                <button className="navbuttons">About</button>
                <button className="navbuttons">Contact</button>
                </div>

            </div>
        </>
    );

}

export default Nav