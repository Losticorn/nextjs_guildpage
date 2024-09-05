"use client";

import { navigation } from "../../data/NavigationData";
import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import guildbanner from "/public/DZTB_LOGO.png";

function NavigationList({ path, name, id, isSelected, onClick, className }) {
  return (
    <motion.li className={className}>
      <Link href={path} onClick={onClick}>
        {name}
      </Link>
      <AnimatePresence>
        {isSelected && (
          <motion.div
            key={id}
            layoutId="border-[1px] border-[#C21F26]"
            className="border-[1px] border-[#C21F26]"
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
        <Image class="flex w-24 m-0 p-0" src={guildbanner} alt="Guild Banner" />
      </Link>
      <ul className="flex flex-wrap items-center justify-center gap-12 list-none text-white text-3xl">
        {filteredNavigation.map((navItem) => (
          <NavigationList
            {...navItem}
            key={navItem.id}
            isSelected={navItem.id === selectedId}
            onClick={() => handleSelect(navItem.id, navItem.name)}
            className="flex flex-col sm:hidden max-sm:hidden xl:flex"
          />
        ))}

        <motion.button
          className="xl:hidden"
          onClick={handleToggleOn}
          whileHover={{ cursor: "pointer" }}
        >
          {selectedId && (
            <span className="block text-white font-2xl m-2">
              {selectedLabel}
            </span>
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
          >
            {filteredNavigation.map((navItem) => (
              <NavigationList
                {...navItem}
                key={navItem.id}
                onClick={() => handleSelect(navItem.id, navItem.name)}
                className="flex flex-col flex-wrap items-center gap-2 p-0 text-white"
              />
            ))}
          </motion.ul>
        </AnimatePresence>
      )}
    </>
  );
}
