import "../menu/menu.css" 

export default function Menu() {
    return(
       <><nav>
            <div className="info">
                <p>02.2024</p>
            </div>
            <div className="logo">
                <p><a href="#"><img src="D:\site-blacksheep\website\src\assets" alt="Black Sheep Filmes" /></a></p>
            </div>
            <div className="toogle-btn">
                <button class="burguer"></button>
            </div>
        </nav><div className="overlay">
                <div className="overlay-menu">
                    <div className="menu-item">
                        <p id="active"><a href="#">Home</a></p>
                    </div>
                    <div className="menu-item">
                        <p><a href="#">Portfolio</a></p>
                    </div>
                    <div className="menu-item">
                        <p><a href="#">About</a></p>
                    </div>
                    <div className="menu-item">
                        <p><a href="#">Blog</a></p>
                    </div>
                    <div className="menu-item">
                        <p><a href="#">Contact</a></p>
                    </div>

                    <div className="sub-nav">
                        <p><a href="#">Instagram</a></p>
                        <p>.</p>
                        <p><a href="#">Vimeo</a></p>
                        <p>.</p>
                        <p><a href="#">Youtube</a></p>
                        <p>.</p>
                        <p><a href="#">LinkedIn</a></p>
                    </div>
                </div>
            </div></>
    )
}