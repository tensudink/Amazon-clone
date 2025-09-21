import React, {useContext} from 'react'
import classes from './Header.module.css';
import {SlLocationPin} from 'react-icons/sl';
import {BsSearch} from  'react-icons/bs';
import LowerHeader from './LowerHeader';
import {BiCart} from 'react-icons/bi';
import { Link} from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';

const Header= () =>{

	const [{basket},dispatch]=useContext(DataContext)
  return (
	<section className={classes.fixed}>
	<section>
			<div className={classes.header_container}>
				{/* logo */}
				<div className={classes.logo_container}>
				<Link to ="/">
				<img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />	
				</Link>
				<div className={classes.delivery}>
                <span>
					<SlLocationPin/>
					</span>
					<div>
						<p>Delivered to</p>
						<span>USA</span>
					</div>
			</div>
			</div>
				{/* Search bar */}
				<div className={classes.search}>
				<select name="" id="">
					<option value ="">All</option> 
				</select>
				<input type="text"/>
				<BsSearch size={25}/>
			</div>
			{/* right side link */}
			<div className={classes.order_container}>
             <Link to ="" className={classes.language}>
				<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="" />
				<select name="" id="">
				<option value="">EN</option>	
				</select>
				</Link>
			 {/* three componenets */}
			 <Link to="/auth" > 
				<p>Sign In</p>
				<span>Account & Lists </span>
			 </Link>
			 {/* Orders */}
<Link to ="/orders">
	<p>returns</p>
	<span>& Orders</span>
</Link>
 {/* cart */}
 <Link to ="/Cart" className={classes.cart}>
	<BiCart size= {35}/>
	<span>{basket.length}</span>
	</Link>
		</div>
		</div>
		</section>
	<LowerHeader/>
	</section>
 );
};

export default Header;