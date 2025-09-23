import React from 'react'
import classes from './Signup.module.css'
import { Link } from 'react-router-dom'



function Auth() {
  return (
  <section className={classes.login}>

    {/* logo */}
    <Link>
    <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png" alt=""
    />
    </Link>

    {/* form */}
<div className={classes.login_container}>
<h1>Sign In</h1>
<form action="">

  <div>
<lable htmlFor="email">Email</lable>
<input type="email" id="email"/>

  </div>
  <div>
<lable htmlFor="password">password</lable>
<input type="password" id="password"/>
  </div>
  <button className={classes.login_signInButton}>Sign In</button>
</form>
{/* agrrement */}
<p>
  By signing-in you agree the AMAZON FAKE CLONE conditions of use & Sale.Please see our privacy Notice, our cookies Notice and our Internet-Based Ads Notice.
</p>
{/* create account btn */}
<button className={classes.login_registerButton}>Create your Amazon Account</button>
</div>
  </section>
  )
}

export default Auth