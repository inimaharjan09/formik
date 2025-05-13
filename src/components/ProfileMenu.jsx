import React, { useState } from 'react'
import {
  UserCircleIcon,
  ChevronDownIcon,
  DocumentChartBarIcon,
  ShoppingCartIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router';

// admin profile menu component
const adminMenuItems = [
  {
    label: "Profile",
    icon: UserCircleIcon,
  },

  {
    label: "Admin Dashboard",
    icon: DocumentChartBarIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

// admin profile menu component
const userMenuItems = [
  {
    label: "Profile",
    icon: UserCircleIcon,
  },

  {
    label: "Cart",
    icon: ShoppingCartIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

export default function ProfileMenu({ user }) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const profileMenuItems = user?.role === 'Admin' ? adminMenuItems : userMenuItems;

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {

                switch (label) {
                  case 'Sign Out':
                    dispatch(removeUser());
                    break;
                  case 'Admin Dashboard':
                    nav('/admin-page');
                    break;

                }
                closeMenu();

              }}
              className={`flex items-center gap-2 rounded ${isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
                }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  )
}