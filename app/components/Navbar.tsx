import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Inicio</Link>
      <Link href="/about">Acerca de</Link>
      <Link href="/contact">Contacto</Link>
    </nav>
  );
};

export default Navbar;
