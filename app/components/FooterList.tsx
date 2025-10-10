import { FooterListItem } from "./FooterListItem";

type FooterListProps = {
  listTitle: string;
  items: string[];
};

export const FooterList = ({ listTitle, items }: FooterListProps) => {
  return (
    <ul className="space-y-2">
      <li className="text-xl font-semibold tracking-wider">{listTitle}</li>
      {items.map((item) => (
        <FooterListItem key={item} listItem={item} />
      ))}
    </ul>
  );
};
