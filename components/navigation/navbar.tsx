import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
              <NavItem href="/">
                    <RegisterIcon className="h-4 w-4" />
                    Ingreso
                  </NavItem>
                 
              </li>
              <li>
              <NavItem href="/waiting">
                    <WaitingIcon className="h-4 w-4" />
                    Sala de Espera
                  </NavItem>
               
              </li>
              <li>
              <NavItem href="/waiting">
                    <DoctorIcon className="h-4 w-4" />
                    Médicos
                  </NavItem>
              </li>
              <li>
             
                  <NavItem href="/list">
                    <UsersIcon className="h-4 w-4" />
                    Pacientes
                  </NavItem>
              </li>
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;