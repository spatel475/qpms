"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ComponentType, FC, useEffect } from "react";

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
	const AuthenticatedComponent: FC<P> = (props) => {
		const { data: session, status } = useSession();
		const router = useRouter();
		const loading = status === "loading";

		useEffect(() => {
			if (!loading && !session) {
				router.push("/login");
			}
		}, [loading, session, router]);

		if (loading) {
			return <div>Loading...</div>;
		}

		if (!session) {
			return null; // Return null to prevent rendering before redirect
		}

		return <WrappedComponent {...props} />;
	};

	return AuthenticatedComponent;
};

export default withAuth;
