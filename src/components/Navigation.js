import { Navbar, NavLink, Nav } from 'react-bootstrap';
import '../css/navigation.css';


export default function Navigation(props) {
    return (
        <Navbar className='navFull' collapseOnSelect expand='lg' bg='black' variant='dark'>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
                <NavLink href='/' className='h1Wrap'>
                    <h1 className='navh1'>Hunter Olson</h1>
                </NavLink>
                <div className='wrap'>
                    <Nav className='navWrap'>
                        <NavLink className='navItem' href='/'>Home</NavLink>
                        <NavLink className='navItem' href='/'>Projects</NavLink>
                        <NavLink className='navItem' href='/'>Contact Me</NavLink>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
