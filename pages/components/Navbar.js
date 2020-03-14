import Link from "next/link";

const Navbar = props => (
  <nav className="navbar navbar-expand navbar-dark bg-primary">
        <Link href='/'>
            <a className="navbar-brand">
                NEXT JS
            </a>
        </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link href="/addperson">
                <a className="nav-link">
                    Add Employee
                </a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="/person">
                <a className="nav-link">
                    Show All
                </a>
            </Link>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link href="/login">
                <a className="nav-link">
                    Login
                </a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="/signup">
                <a className="nav-link">
                    SignUp
                </a>
            </Link>
        </li>
      </ul>
  </nav>
);

export default Navbar;
