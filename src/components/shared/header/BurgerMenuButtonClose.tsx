import IconClose from "../icons/IconClose";

interface BurgerMenuButtonCloseProps {
  toggleHeaderMenuOpen?: () => void;
}

export default function BurgerMenuButtonClose({
  toggleHeaderMenuOpen,
}: BurgerMenuButtonCloseProps) {
  return (
    <button
      aria-label="open menu button"
      type="button"
      onClick={toggleHeaderMenuOpen}
      className="text-white outline-none"
    >
      <IconClose />
    </button>
  );
}
