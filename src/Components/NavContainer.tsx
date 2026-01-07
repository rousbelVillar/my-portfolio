import { Fragment } from "react/jsx-runtime";
import './NavContainer.css'
export const NavContainer = ()=>{
    return (<Fragment>
        <header>
        <div className="container">
            <div id="logo">GFG</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#/">Projects</a></li>
                    <li><a href="#/about">Resume</a></li>
                    <li><a href="#/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section className="content">
        <div className="container">
            <h1>Welcome to Our Website!</h1>
            <p>
              	Get plenty of knowledge by our 
              	wonderful courses.
          	</p>
        </div>
    </section>
    </Fragment>);
}