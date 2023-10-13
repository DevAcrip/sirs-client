import { useState } from "react"
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdDiamond } from 'react-icons/md'
import { BsCardChecklist } from 'react-icons/bs'

function Sidebar() {

  const [open, setOpen] = useState(true);
  const Menus = [
    //{ title: "Inicio", icon: BsCardChecklist, to: "home/" },
    { title: "Reservar", icon: BsCardChecklist, to: "estudiantes/" },
    { title: "Incidencias", icon: BsCardChecklist, to: "estudiantes/" },
    { title: "Solicitudes", icon: BsCardChecklist, to: "estudiantes/" },
  ];

  return (
    <div className={` ${open ? "w-80" : "w-20 "} bg-white-soft  h-[96vh] p-5 pt-8 m-5 border rounded-2xl relative`}>
      <div className="flex gap-x-4 items-center">
        <MdDiamond
          size={40}
          className='absolute cursor-pointer duration-500 -mt-3'
          onClick={() => setOpen(!open)}
        />
        <h1 className={`text-neutral-500 origin-left font-poppins text-xl duration-200 -mt-4 ml-12 ${!open && "scale-0"}`}>SIRS</h1>
        <GiHamburgerMenu
          size={30}
          className={`absolute cursor-pointer right-7 top-4 ${!open && "scale-0"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className=" mt-4 border-t border-gray- "></div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-white-strong text-neutral-500 text- text-xl items-center gap-x-4 ${Menu.gap ? "mt-16" : "mt-7"}`}>
            {Menu.icon && <Menu.icon />}
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              <NavLink
                to={Menu.to}
              >
                {Menu.title}
              </NavLink>
            </span>

          </li>
        ))}
      </ul>
    </div>
  )
}

export { Sidebar }