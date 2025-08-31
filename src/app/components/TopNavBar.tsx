import Link fron 'next/link'

export default function TopNavBar() {
  return (
	<nav>
		<Link href="/about">About</Link>
		<Link href="/properties">Properties</Link>
		<Link href="/owners">Owners</Link>
	</nav>
  );
}