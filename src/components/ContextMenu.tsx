import { FC, ReactElement } from "react";

export interface Item {
  title: string;
  icon?: string | ReactElement;
  handler: (param: any) => void;
  underline?: boolean;
  danger?: boolean;
}

interface Props {
  items: Item[];
  hideMenu?: () => void;
}

const ContextMenu: FC<Props> = ({ items = [], hideMenu = null }) => {
  return (
    <ul className="context-menu">
      {items.map((item) => {
        // if (!item) return null;
        const {
          title,
          icon = null,
          handler = (evt) => {
            evt.preventDefault();
            if (hideMenu) {
              hideMenu();
            }
          },
          underline = false,
          danger = false
        } = item;
        return (
          <li
            className={`item ${underline ? "bottom_line" : ""} ${danger ? "danger" : ""}`}
            key={title}
            onClick={(evt) => {
              evt.stopPropagation();
              evt.preventDefault();
              handler(evt);
              if (hideMenu) {
                hideMenu();
              }
            }}
          >
            {icon}
            {title}
          </li>
        );
      })}
    </ul>
  );
};

export default ContextMenu;