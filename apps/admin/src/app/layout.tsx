import type { Metadata } from "next";
import "./admin.css";

export const metadata: Metadata = {
	title: "Admin",
	description: "Admin Dashboard",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
