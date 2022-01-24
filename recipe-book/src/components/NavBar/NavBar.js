import {useState} from 'react'
import styles from './NavBar.module.css';
import cx from 'classnames';

export default function NavBar() {
    const [logoText, setLogoText] = useState("Recipe Book");
    const [navTheme, setNavTheme] = useState(styles.primaryTheme);
    
    return (
        <nav>
            <ul className={cx(navTheme, styles.navBar)}>
                <h2 className={styles.logo}>{logoText}</h2>
                <li className={styles.navItem} onClick={() => {setLogoText("Add Recipe"); setNavTheme(styles.themeTwo)}}>Add Recipe</li>
                <li className={styles.navItem} onClick={() => {setLogoText("Dessert"); setNavTheme(styles.themeFour)}}>Dessert</li>
                <li className={styles.navItem} onClick={() => {setLogoText("Dinner"); setNavTheme(styles.themeThree)}}>Dinner</li>
                <li className={styles.navItem} onClick={() => {setLogoText("Lunch"); setNavTheme(styles.themeTwo)}}>Lunch</li>
                <li className={styles.navItem} onClick={() => {setLogoText("Breakfast"); setNavTheme(styles.themeOne)}}>Breakfast</li>
                <li className={styles.navItem} onClick={() => {setLogoText("Recipe Book"); setNavTheme(styles.primaryTheme)}}>All</li>
            </ul>
        </nav>
    )
}
