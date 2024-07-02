import "../menu/menu.css" 

export default function Menu() {
    return(
       <nav>
        <div className="info">
            <p>Black Sheep.2024</p>
        </div>
        <div className="logo">
            <p><a href="#"></a></p>
        </div>
        <div className="toogle-btn">
            <button class="burguer"></button>
        </div>
       </nav>

       <div className="overlay">
        <div className="overlay-menu">
            <div className="menu-item">
                
            </div>
        </div>
       </div>
    )
}