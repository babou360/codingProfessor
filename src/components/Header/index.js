import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
// import './styles.scss';
import './index.css';

import Logo from './../../assets/logo.png';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
});

const Header = props => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);
  const [click, setClick] = useState(false);
  const [button,setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu= () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(true)
        }else{
            setButton(false)
        }
    }
    // useEffect(() => {
    //     showButton()
    // }, [])
    window.addEventListener('resize',showButton)

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link className='logo_' to="/" onClick={closeMobileMenu}>Coding Professor</Link>
        </div>
        <div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        </div>
        <div className={click ? 'nav-menu active' : "callToActions"}>
          <ul className='mobile'>
          <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/search" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>

            {currentUser && [
            //   <li key={1}>
            //     <Link to="/dashboard" onClick={closeMobileMenu}>
            //       My Account
            //     </Link>
            //   </li>,
            //   <li key={3}>
            //   <Link to="/cart" onClick={closeMobileMenu}>
            //     Saved ({totalNumCartItems})
            //   </Link>
            // </li>,
             <li key={1}>
             <span onClick={() => signOut()}>
               LogOut
             </span>
           </li>,
            ]}

            {!currentUser && [
              <li key={1}>
                <Link to="/registration" onClick={closeMobileMenu}>
                  Register
                </Link>
              </li>,
              <li key={2}>
                <Link to="/login" onClick={closeMobileMenu}>
                  Login
                </Link>
              </li>
            ]}

          </ul>





        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null
};

export default Header;
