import type { Metadata } from "next";

import "./customer.css";

export const metadata: Metadata = {
	title: "Customer",
	description: "Customer View",
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
