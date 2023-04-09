import { React } from "react";
import { menuHome } from "../ultis/menus";
import { NavLink, useNavigate } from "react-router-dom";

const notActiveStyle =
  "flex gap-[12px] font-bold text-[#32323D] text-[13px] items-center";
const activeStyle =
  "flex gap-[12px] font-bold text-[#f38609] text-[13px] items-center";

function Header() {
  const mssv = localStorage.getItem("mssv");
  const navigate = useNavigate();

  return (
    <div className="header">
      <nav className="flex justify-around">
        {mssv === null ? (
          <>
            {menuHome
              .filter((item) => item.path === "" || item.path === "login")
              .map((items) => (
                <NavLink
                  to={items.path}
                  className={({ isActive }) =>
                    isActive ? activeStyle : notActiveStyle
                  }
                  end={true}
                  key={items.path}
                >
                  <span className="mx-[10px] hover:text-[#27ae60]">
                    {items.text}
                  </span>
                </NavLink>
              ))}
          </>
        ) : (
          <>
            {menuHome
              .filter((item) => item.path === "" || item.path === "logout")
              .map((items) => (
                items.path === "logout" ? (
                  <button style={{fontSize: "13px"}} onClick={()=>{
                    localStorage.removeItem('mssv');
                    navigate('/');
                  }} className={`${notActiveStyle}` }>{items.text}</button>
                ):(
                  <>
                <NavLink
                  to={items.path}
                  className={({ isActive }) =>
                  isActive ? activeStyle : notActiveStyle
                }
                end={true}
                key={items.path}
                >
                  <span className="mx-[10px] hover:text-[#27ae60]">
                    {items.text}
                  </span>
                </NavLink>
                  </>
                )
              ))}
          </>
        )}
      </nav>
    </div>
  );
}

export default Header;
