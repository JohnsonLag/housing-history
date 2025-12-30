import Link from 'next/link'

export function Page() {
  return (
	<nav>
		<Link href="/entries/properties/example-property">example-property</Link>
		<Link href="/entries/properties/1">1</Link>
	</nav>
  );
}