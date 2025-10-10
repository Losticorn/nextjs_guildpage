import React from "react";

type FooterListItemProps = {
  listItem: string;
};

export const FooterListItem = ({ listItem }: FooterListItemProps) => {
  return (
    <li
      className="text-sm hover:text-black cursor-pointer hover:font-bold"
      key={listItem}
    >
      {listItem}
    </li>
  );
};
