import { Drawer } from "@mui/material";
import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaFolderOpen, FaUser } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { IoClose, IoHomeSharp, IoMenuSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { headerData } from "../../../data/headerData";
import "./navbar.css";

function NavbarUI({
  theme,
  shortname,
  classes,
  handleDrawerOpen,
  handleDrawerClose,
  open,
  changeTheme,
  isDark,
}) {
  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: theme.primary }}>Wenjia</h1>

        <IoMenuSharp
          className={classes.navMenu}
          onClick={handleDrawerOpen}
          aria-label="Menu"
        />
      </div>
      <Drawer
        variant="temporary"
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
        open={open}
        classes={{ paper: classes.MuiDrawer }}
        className="drawer"
        disableScrollLock={true}
      >
        <div className="div-closebtn">
          <IoClose
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className={classes.closebtnIcon}
            role="button"
            tabIndex="0"
            aria-label="Close"
          />
        </div>
        <br />

        <div onClick={handleDrawerClose}>
          <div className="navLink--container">
            <Fade left>
              <NavLink to="/#landing" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <IoHomeSharp className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Home</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/about" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <FaUser className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>About</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#projects" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <FaFolderOpen className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Projects</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <a target="_blank" rel="noreferrer" href={headerData.cvUrl}>
                <div className={classes.drawerItem}>
                  <HiDocumentText className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>CV</span>
                </div>
              </a>
            </Fade>

            <Fade left>
              <a target="_blank" rel="noreferrer" href={headerData.contactUrl}>
                <div className={classes.drawerItem}>
                  <MdPhone className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Contact</span>
                </div>
              </a>
            </Fade>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default NavbarUI;
