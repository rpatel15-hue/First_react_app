import {Link} from "react-router-dom";
import classes from "./MainNavigation.module.css";
import {useContext} from "react";
import FavoritesContext from "../../Store/favorites-context";

function MainNavigation() {
    const favoraitesCtx = useContext(FavoritesContext);

    return (<header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to='/'>All Meetups</Link></li>
                    <li><Link to='/new-meetup'>New Meetups</Link></li>
                    <li><Link to='/favs'>
                        Favorites
                        <span className={classes.badge}>{favoraitesCtx.totalFavorites}</span>
                    </Link></li>
                </ul>
            </nav>
        </header>)
}

export default MainNavigation;