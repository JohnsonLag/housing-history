import Link from 'next/link'

export function TopNavBar() {
  return (
	<nav>
		<Link href="/about">About</Link>
		<Link href="/entries/properties">Properties</Link>
		<Link href="/entries/owners">Owners</Link>
	</nav>
  );
}