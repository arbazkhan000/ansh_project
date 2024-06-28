import {Link } from "react-router-dom";


export default function ErrorPage(){

    return(
        <div className="content mt-5 text-center">
            <h2 className="header text-center">404</h2>
            <h4>Looks like you are lost!</h4>
            <p className="mt-3">Oops! It seems like the page you're trying to access does not exist.
                If you beleive there's an issue feel free to report it and we'll look into it.
            </p>
            <div className="btn mt-3">
               <Link to='/' className="me-3 btn btn-primary">Return Home</Link>
               <Link to='/contact'className="me-3 btn btn-primary">Report</Link>

            </div>
        </div>
    )
}