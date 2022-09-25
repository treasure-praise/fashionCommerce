import { useContext } from "react"
import { Outlet, Link  } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/083 crown.svg"
import "./navigation.styles.scss"
import { UserContext } from "../../components/contexts/users.context"
import { CartContext } from "../../components/contexts/cart.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

const Navigation=()=>{
    const {currentUser} =useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    return(
      <>
        <div className="navigation">
            
            <Link className="logo-container" to="/">
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    Shop
                </Link>
                {currentUser ? (
                    <span onClick={signOutUser} className="nav-link">SIGN-OUT</span>
                ):(<Link className="nav-link" to="/auth">
                    SignIn
                </Link>)}
                <CartIcon/>
            </div>
                {console.log(isCartOpen)}
                {isCartOpen && <CartDropdown/> }
        </div>
        <Outlet/>
      </>
    )
  }

  export default Navigation