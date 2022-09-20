import './Header.css'
import {Link} from 'react-router-dom'
import { FaHome } from "react-icons/fa";

function Header() {
    return ( <div className='header'>
        <div className='top_header'>
        <Link to={'/'} className='logo-link'>
                <div className='logo'>
               
                    <span>BOOK</span>
                    <span> VIEW</span>
                    <img className='logo_img' src='https://iweb.tatthanh.com.vn/pic/3/blog/images/logo-sach(36).jpg' alt='logo'/>
                    
                </div>
                </Link>
            <div className='header_menu'>
                <ul>
                    <li className='menu_item'>
                        <Link className='menu-link' to={``}>Danh sách</Link>
                    </li>
                    <li className='menu_item'>
                        Phân loại theo chương
                    </li>
                    <li className='menu_item'>
                        <Link className='menu-link' to={``}>Thể loại</Link>
                    </li>  
                </ul>
            </div>
        </div>
        <div className='bottom-header'>   <div className='bot_header'>
            <FaHome className='logo_home'/>
            <div className='header_tittle'>Sách/ Triết lí và chính sách giáo dục</div>
        </div></div>
    </div> );
}

export default Header;