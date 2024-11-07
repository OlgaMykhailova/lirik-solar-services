import IconBurgerMenu from "../icons/IconBurger";

interface BurgerMenuButtonOpenProps {
  isHeaderMenuOpened?: boolean;
  openMenu?: () => void;
}

export default function BurgerMenuButtonOpen({
  openMenu,
}: BurgerMenuButtonOpenProps) {
  return (
    <button
      aria-label="open menu button"
      type="button"
      onClick={openMenu}
      className="text-white outline-none"
    >
      <IconBurgerMenu />
    </button>
  );
}
