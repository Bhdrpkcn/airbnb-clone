import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="navbar-end">
      <div onClick={() => {}} className="navbar-end-motto">
        Cafe'ni bulalım !
      </div>
      <div onClick={toggleOpen} className="navbar-menu">
        <AiOutlineMenu />
        <Avatar />
      </div>

      {isOpen && <MenuItem />}
    </div>
  );
};

export default UserMenu;
