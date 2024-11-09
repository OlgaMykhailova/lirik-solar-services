interface IconButtonProps {
  handleClick: () => void;
  children: React.JSX.Element;
}

export default function IconButton({ handleClick, children }: IconButtonProps) {
  return (
    <button
      aria-label="open menu button"
      type="button"
      onClick={handleClick}
      className="relative text-white outline-none before:content-[''] before:absolute before:-z-10 before:top-0 before:left-0 before:rounded-full before:size-full 
                before:bg-blueGradient before:opacity-0 before:transition before:duration-300 before:ease-out active:before:opacity-100"
    >
      {children}
    </button>
  );
}