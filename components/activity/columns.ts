import type { ColumnDef } from "@tanstack/vue-table";
import { ArrowUpDown, ChevronDown } from "lucide-vue-next";
import { h } from "vue";
import { Button } from "@/components/ui/button";
import DropdownAction from "@/components/activity/data-table-dropdown.vue";
import { Checkbox } from "@/components/ui/checkbox";

export interface Activity {
	id: string;
	amount: number;
	status: "Active" | "Closed";
	name: string;
	order: string;
	table: number;
	time: Date;
}

export const columns: ColumnDef<Activity>[] = [
	{
		id: "select",
		header: ({ table }) => h(Checkbox, {
			"modelValue": table.getIsAllPageRowsSelected(),
			"onUpdate:modelValue": (value: boolean | "indeterminate") => table.toggleAllPageRowsSelected(!!value),
			"ariaLabel": "Select all",
		}),
		cell: ({ row }) => h(Checkbox, {
			"modelValue": row.getIsSelected(),
			"onUpdate:modelValue": (value: boolean | "indeterminate") => row.toggleSelected(!!value),
			"ariaLabel": "Select row",
		}),
		enableSorting: false,
		enableHiding: false,
	},

	{
		accessorKey: "status",
		header: () => h("div", { class: "text-left" }, "Status"),
		cell: ({ row }) => h("span", {}, row.getValue("status")),
	},

	{
		accessorKey: "name",
		header: ({ column }) => {
			return h("div", { class: "flex items-center" }, [
				h("div", { class: "mr-2" }, "Name"),
				h(Button, {
					variant: "ghost",
					onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
				}, () => h(ArrowUpDown, { class: "h-4 w-4" })),
			]);
		},
		cell: ({ row }) => h("div", { class: "text-left" }, row.getValue("name")),
	},

	{
		accessorKey: "table",
		header: () => h("div", { class: "text-center" }, "Table"),
		cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("table")),
	},

	{
		accessorKey: "order",
		header: () => h("div", { class: "text-center" }, "Order"),
		cell: ({ row }) => h("div", { class: "text-center" }, row.getValue("order")),
	},

	{
		accessorKey: "amount",
		header: () => h("div", { class: "text-right" }, "Amount"),
		cell: ({ row }) => {
			const amount = Number.parseFloat(row.getValue("amount"));
			const formatted = new Intl.NumberFormat("th-TH", {
				style: "currency",
				currency: "THB",
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			}).format(amount);

			return h("div", { class: "text-right" }, formatted);
		},
	},

	{
		accessorKey: "time",
		header: () => h("div", { class: "text-center" }, "Date"),
		cell: ({ row }) => {
			const date = new Date(row.getValue("time"));
			const formatted = date.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
			return h("div", { class: "text-center" }, formatted);
		},
	},

	{
		accessorKey: "time",
		header: () => h("div", { class: "text-center" }, "Time"),
		cell: ({ row }) => {
			const date = new Date(row.getValue("time"));
			const formatted = date.toLocaleTimeString("en-US", {
				hour: "numeric",
				minute: "2-digit",
				second: "2-digit",
				hour12: true,
			});
			return h("div", { class: "text-center" }, formatted);
		},
	},

	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const Activity = row.original;

			return h("div", { class: "" }, h(DropdownAction, {
				Activity,
				onExpand: row.toggleExpanded,
			}));
		},
	},
];
