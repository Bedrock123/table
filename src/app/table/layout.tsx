"use client";

import "@mantine/core/styles.layer.css";
import "@mantine/dates/styles.layer.css";
import "mantine-datatable/styles.layer.css";

import { MantineProvider } from "@mantine/core";

export default function MantineCombinedProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <MantineProvider>{children}</MantineProvider>;
}
