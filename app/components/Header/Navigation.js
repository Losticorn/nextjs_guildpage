"use client";

import { navigation } from "../../data/NavigationData";
import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation"; // Hook to get the current path
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import classes from "../../styles/Navigation.module.css";
import guildbanner from "/public/DZTB_LOGO.png";

function NavigationList({ path, name, id, isSelected, onClick }) {
  return (
    <motion.li>
      <Link href={path} onClick={onClick}>
        {name}
      </Link>
      <AnimatePresence>
        {isSelected && (
          <motion.div
            key={id}
            layoutId={classes.active}
            className={classes.active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function Navigation({ user }) {
  const pathname = usePathname();
  const [selectedId, setSelectedId] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [isToggledOn, setIsToggledOn] = useState(false);

  useEffect(() => {
    // Determine the current page based on the URL
    const currentNavItem = navigation.find(
      (navItem) => navItem.path === pathname
    );
    if (currentNavItem) {
      setSelectedId(currentNavItem.id);
      setSelectedLabel(currentNavItem.name);
    }
  }, [pathname]); // Runs whenever the path changes

  function handleToggleOn() {
    setIsToggledOn((prev) => !prev);
  }

  function handleToggleOff() {
    setIsToggledOn(false);
  }

  const handleSelect = (id, label) => {
    setSelectedId(id);
    setSelectedLabel(label);
    handleToggleOff(); // Close the menu after selecting an item
  };

  const filteredNavigation = useMemo(() => {
    return user
      ? navigation
      : navigation.filter((navItem) => !navItem.needAuthorization);
  }, [user]);

  return (
    <>
      <Link href="/">
        <Image src={guildbanner} alt="Guild Banner" />
      </Link>
      <ul className={classes.list}>
        {filteredNavigation.map((navItem) => (
          <NavigationList
            {...navItem}
            key={navItem.id}
            isSelected={navItem.id === selectedId}
            onClick={() => handleSelect(navItem.id, navItem.name)}
          />
        ))}

        <motion.button
          className={classes.togglebutton}
          onClick={handleToggleOn}
          whileHover={{ cursor: "pointer" }}
        >
          {selectedId && (
            <span className={classes.currentpage}>{selectedLabel}</span>
          )}
          <GiHamburgerMenu color="white" size={35} />
        </motion.button>
      </ul>

      {isToggledOn && (
        <AnimatePresence>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={classes.hamburgerlist}
          >
            {filteredNavigation.map((navItem) => (
              <NavigationList
                {...navItem}
                key={navItem.id}
                onClick={() => handleSelect(navItem.id, navItem.name)}
              />
            ))}
          </motion.ul>
          {/*<motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={classes.hamburgeraccount}
          >
            <Tooltip position="bottom">
              <Link href="/login">
                <JoinButton className={classes.loginbutton} title="Login" />
              </Link>
            </Tooltip>
            <Tooltip position="bottom">
              <JoinButton className={classes.loginbutton} title="Logout" />
            </Tooltip>
          </motion.div>*/}
        </AnimatePresence>
      )}
    </>
  );
}
