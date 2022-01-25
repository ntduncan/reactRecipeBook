import {useState} from 'react'
import styles from './NavBar.module.css';
import cx from 'classnames';

export default function NavBar({setNavSelection, navSelection}) {
    
    const [navTheme, setNavTheme] = useState(styles.primaryTheme);
    
    return (
        <nav>
            <ul className={cx(navTheme, styles.navBar)}>
                <h2 className={styles.logo}>{navSelection}</h2>
                <li className={styles.navItem} onClick={() => {setNavSelection("Add Recipe"); setNavTheme(styles.themeTwo)}}>Add Recipe</li>
                <li className={styles.navItem} onClick={() => {setNavSelection("Dessert"); setNavTheme(styles.themeFour)}}>Dessert</li>
                <li className={styles.navItem} onClick={() => {setNavSelection("Dinner"); setNavTheme(styles.themeThree)}}>Dinner</li>
                <li className={styles.navItem} onClick={() => {setNavSelection("Lunch"); setNavTheme(styles.themeTwo)}}>Lunch</li>
                <li className={styles.navItem} onClick={() => {setNavSelection("Breakfast"); setNavTheme(styles.themeOne)}}>Breakfast</li>
                <li className={styles.navItem} onClick={() => {setNavSelection("Recipe Book"); setNavTheme(styles.primaryTheme)}}>All</li>
            </ul>
        </nav>
    )
}
