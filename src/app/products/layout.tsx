import Filters from "@/components/products/filters";

function ProductLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex">
			<div className="w-[300px] min-h-screen border-r-1 border-gray-200 p-2">
				<Filters />
			</div>
			<div className="w-full p-3">{children}</div>
		</div>
	);
}

export default ProductLayout;
