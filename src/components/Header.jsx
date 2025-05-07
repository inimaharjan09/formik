import React from "react";
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";


export default function Header() {
  const { user } = useSelector((state) => state.userSlice);

  return (
    <Navbar className=" p-2 ">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Redux Shop
        </Typography>


        {user ? <ProfileMenu user={user} /> : <NavLink to={'/login'}>  <Button size="sm" variant="text">
          <span>Log In</span>
        </Button> </NavLink>}




      </div>

    </Navbar>
  );
}