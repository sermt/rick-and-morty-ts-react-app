export default function NavigationBar({currentPage,handleNavigation}: Props) {
  return (
    <header className="d-flex container justify-content-between align-items-center">
      <p>Page: {currentPage}</p>
      <button className="btn btn-primary" onClick={handleNavigation}>
        Next
      </button>
    </header>
  );
}

interface Props{
  readonly handleNavigation: () => void;
  readonly currentPage: number;
}