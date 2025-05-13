"use client";

import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";
const PAGE_SIZE = 2;

const data = [
	{ id: 1, name: "Joe Biden", bornIn: 1942, party: "Democratic" },
	{
		id: 2,
		name: "Donald Trump",
		bornIn: 1946,
		party: "Republican",
	},
	{
		id: 3,
		name: "Barack Obama",
		bornIn: 1961,
		party: "Democratic",
	},
	{
		id: 4,
		name: "George W. Bush",
		bornIn: 1946,
		party: "Republican",
	},
	{
		id: 5,
		name: "Bill Clinton",
		bornIn: 1946,
		party: "Democratic",
	},
	{
		id: 6,
		name: "George H. W. Bush",
		bornIn: 1924,
		party: "Republican",
	},
	{
		id: 7,
		name: "Ronald Reagan",
		bornIn: 1911,
		party: "Republican",
	},
	{
		id: 8,
		name: "Jimmy Carter",
		bornIn: 1924,
		party: "Democratic",
	},
	{ id: 9, name: "Gerald Ford", bornIn: 1913, party: "Republican" },
	{
		id: 10,
		name: "Richard Nixon",
		bornIn: 1913,
		party: "Republican",
	},
];

export default function GuestsTable() {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const [records, setRecords] = useState(data.slice(0, PAGE_SIZE));

	const filteredData = data.filter((item) =>
		item.name.toLowerCase().includes(search.toLowerCase()),
	);

	useEffect(() => {
		const from = (page - 1) * PAGE_SIZE;
		const to = from + PAGE_SIZE;
		setRecords(data.slice(from, to));
	}, [page]);

	return (
		<DataTable
			withTableBorder={false}
			striped
			maxHeight={500}
			highlightOnHover
			records={records}
			totalRecords={data.length}
			recordsPerPage={PAGE_SIZE}
			page={page}
			onPageChange={(p) => setPage(p)}
			// define columns
			columns={[
				{
					accessor: "id",
					title: "#",
					textAlign: "right",
					sortable: true,
					width: 100,
				},
				{ accessor: "name", width: 200 },
				{
					accessor: "party",
					// this column has custom cell data rendering

					width: 100,
				},
				{ accessor: "bornIn", width: 100 },
			]}
		/>
	);
}
