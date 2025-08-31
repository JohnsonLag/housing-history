import Link from 'next/link'

export function TopNavBar() {
  return (
	<nav>
		<Link href="/about">About</Link>
		<Link href="/properties">Properties</Link>
		<Link href="/owners">Owners</Link>
	</nav>
  );
}