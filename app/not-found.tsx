import Link from "next/link";

export default function NotFound() {
	return (
		<div className="">
			<h1>Not found – 404!</h1>
			<div>
				<Link href="/" className="text-blue-500">Go back to Home</Link>
			</div>
		</div>
	);
}
