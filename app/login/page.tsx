import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "./form";

export default async function LoginPage() {
	console.log("in login");
	const session = await getServerSession();
	if (session) {
		redirect("/");
	}
	return <LoginForm />;
}
