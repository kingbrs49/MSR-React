import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Nav,
    NavDropdown
} from "react-bootstrap";

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" className="red-nav">
            <Navbar.Brand href="#home">The Macho Sports Report</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About The Author</Nav.Link>
                    <NavDropdown title="Archives" id="basic-nav-dropdown">
                        <NavDropdown title="2018" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">December</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2017" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">September</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">July</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">June</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">May</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">April</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">February</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">January</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2016" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">December</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">November</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">October</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">September</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">August</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">July</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">June</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.8">May</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.9">April</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.10">March</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.11">February</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.12">January</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2015" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">December</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">November</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">October</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">September</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">August</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">July</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">June</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.8">May</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.9">April</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.10">March</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.11">February</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.12">January</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2014" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">December</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">November</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">October</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">September</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">August</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">July</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">June</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.8">May</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.9">April</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.10">March</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.11">February</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2013" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">December</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">November</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">October</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">September</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">August</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">July</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2012" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">December</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">November</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">October</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">September</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">August</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">July</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">June</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.8">May</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.9">March</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.10">February</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.11">January</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2011" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">December</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">November</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">October</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">September</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">July</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">June</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">May</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.8">April</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.9">March</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.10">February</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.11">January</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2010" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">December</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">November</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">October</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">September</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">August</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">March</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2009" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">September</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">August</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">April</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">January</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2008" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">August</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">June</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">February</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">January</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2007" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">November</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">October</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">September</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">August</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">May</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">March</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">January</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2006" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">December</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">November</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">October</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">September</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="2005" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">November</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">October</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">September</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">August</NavDropdown.Item>
                        </NavDropdown>
                    </NavDropdown>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown title="Baseball" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">MLB</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Basketball" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">NBA</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">NCAA Basketball</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown.Item href="#action/3.1">Boxing</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Fantasy Sports</NavDropdown.Item>
                        <NavDropdown title="Football" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">NFL</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">NCAA Football</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Golf" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">PGA</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">USGA</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">LPGA</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Hockey" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">NHL</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown.Item href="#action/3.3">Olympic Sports</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Pro Wrestling</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Soccer/Futbol</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6">Sports Gaming</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.7">Sports Media</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.8">Tennis</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Ask The MSR!" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#https://www.facebook.com/CaMachoSports">Facebook</NavDropdown.Item>
                        <NavDropdown.Item href="https://twitter.com/CaMachoSports">Twitter</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Other Columns" id="basic-nav-dropdown">
                        <NavDropdown.Item href="http://www.davislifemagazine.com/davis-today/sports/macho-sports/">Davis Life Magazine</NavDropdown.Item>
                        <NavDropdown.Item href="https://worldinsport.com/author/kingbrs49/">World In Sport</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.tcu360.com/authors/paulo-camacho/">TCU 360</NavDropdown.Item>
                        <NavDropdown.Item href="https://medium.com/all-things-picardy">All Things Picardy</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;