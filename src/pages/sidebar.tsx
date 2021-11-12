import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { GrPieChart } from 'react-icons/gr';
import { IoMdPerson, IoIosPeople } from 'react-icons/io';
import { MdLocationPin, MdHomeWork, MdSettings } from 'react-icons/md';

const Sidebar = () => {
  return (
    <IconContext.Provider
      value={{
        size: '20',
        style: { verticalAlign: 'middle', marginRight: '0.5rem' },
      }}
    >
      <div className=" top-0 left-0  w-64 m-0  inline-flex flex-col bg-primary text-black shadow-lg ">
        <i className="-ml-16 ">
          {' '}
          <Image
            className=" z-10 "
            src="/undp-logo.svg"
            width={300}
            height={100}
          />
        </i>

        <ul className="px-16 pt-4 text-base text-black">
          <Link href="dashboard">
            <li className="cursor-pointer my-6  flex items-center">
              <GrPieChart />
              Dashboards
            </li>
          </Link>

          <Link href="/beneficiary/">
            <li className="cursor-pointer my-6 flex items-center">
              <IoIosPeople />
              Beneficiary
            </li>
          </Link>

          <Link href="/location/">
            <li className="cursor-pointer my-6  flex items-center">
              {' '}
              <MdLocationPin /> Location{' '}
            </li>
          </Link>

          <Link href="/occupation">
            <li className="cursor-pointer my-6 flex items-center">
              {' '}
              <MdHomeWork />
              Occupation
            </li>
          </Link>
          <li className="cursor-pointer my-6 flex items-center ">
            {' '}
            <IoMdPerson />
            Agents
          </li>
        </ul>

        <h2 className="mx-5 font-bold">System</h2>
        <ul className=" text-base text-black px-16">
          <li className="cursor-pointer my-6  flex items-center ">
            {' '}
            <MdSettings /> Settings{' '}
          </li>
          <li className="cursor-pointer my-6  flex items-center">
            {' '}
            <IoMdPerson /> Users
          </li>
        </ul>
      </div>{' '}
    </IconContext.Provider>
  );
};
export default Sidebar;

// import React from "react";
// import Image from "next/image";
// import { makeStyles } from "@mui/styles";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";

// import {
//   MdPieChart,
//   MdPeople,
//   MdLocationPin,
//   MdPerson,
//   MdHomeWork,
//   MdSettings,
// } from "react-icons/md";

// import { Box } from "@mui/system";
// import Link from "next/link";

// const drawerWidth = 240;

// const useStyles: any = makeStyles({
//   paper: {
//     background: "#5988C0",
//   },
// });

// const Sidebar = () => {
//   const classes = useStyles();
//   const menuItems = [
//     {
//       text: "Dashboard",
//       icon: <MdPieChart />,
//       path: "/",
//     },
//     { text: "Beneficiaries", icon: <MdPeople />, path: "/beneficiary/" },
//     { text: "Location", icon: <MdLocationPin />, path: "/location/" },
//     { text: "Occupation", icon: <MdHomeWork />, path: "/" },
//     { text: "Agent", icon: <MdPerson />, path: "/" },
//   ];
//   const settingItems = [
//     { text: "Settings", icon: <MdSettings />, path: "/" },
//     { text: "Users", icon: <MdPerson />, path: "/" },
//   ];

//   return (
//     <Box>
//       <Drawer
//         classes={{ paper: classes.paper }}
//         variant="permanent"
//         anchor="left"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//       >
//         <div>
//           {" "}
//           <i className="-ml-16 ">
//             {" "}
//             <Image src="/undp-logo.svg" width={300} height={100} />
//           </i>
//         </div>

//         {/* list / links*/}
//         <Box sx={{ mt: 4, mb: 2, pl: 2 }}>
//           <List>
//             {menuItems.map((item) => (
//               <ListItem key={item.text} sx={{}}>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText sx={{ ml: -2 }}>{item.text}</ListItemText>
//               </ListItem>
//             ))}
//           </List>
//         </Box>

//         <Box sx={{ mt: 4, mb: 2, pl: 2 }}>
//           <h2>System</h2>
//           <List>
//             {settingItems.map((item) => (
//               <ListItem key={item.text}>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText sx={{ ml: -2 }}>{item.text}</ListItemText>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// };
// export default Sidebar;
