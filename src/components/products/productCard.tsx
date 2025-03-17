import AddToCart from "./addToCart";
import AddToWishlist from "./addToWishList";

function ProductCard({ image, title, price, comparePrice, layout = "vertical", wishlisted = false }: { image: string; title: string; price: number; comparePrice: number; layout?: string; wishlisted?: boolean }) {
	const amountSaved = comparePrice - price;

	return (
		<div className={`relative bg-white shadow-md rounded-lg overflow-hidden border-gray-300 hover:shadow-md transition-transform duration-300 p-3 ${layout === "horizontal" ? "w-full max-w-[500px] h-36 flex" : "w-full max-w-[280px] h-auto flex flex-col"}`}>
			<div className={`${layout === "horizontal" ? "w-1/3 h-full" : "w-full h-40"} overflow-hidden rounded-md relative`}>
				<img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
				{layout === "vertical" && (
					<div className="absolute top-2 right-2 bg-white w-6 h-6 p-1 rounded-full shadow-md cursor-pointer hover:scale-110 transition">
						<AddToWishlist wishlisted={wishlisted} />
					</div>
				)}
			</div>
			<div className={`${layout === "horizontal" ? "w-2/3 px-4 py-2" : "p-3 text-left"} flex flex-col justify-between`}>
				<h2 className="font-semibold text-gray-700 leading-tight text-sm text-left">{title}</h2>
				<div className={`flex items-center justify-between ${layout === "horizontal" ? "" : "mt-2"}`}>
					<div className="flex items-center gap-2">
						<span className="text-lg font-bold text-gray-900">₹{price}</span>
						{comparePrice > price && <span className="text-sm text-gray-500 line-through">₹{comparePrice}</span>}
					</div>
					{comparePrice > price && <span className="text-sm text-orange-400 font-semibold">Save ₹{amountSaved}</span>}
				</div>
				<div className="flex items-center gap-2 w-full mt-2">
					<AddToCart />
					{layout === "horizontal" && (
						<div className="bg-white p-1 w-6 h-6 rounded-full shadow-md cursor-pointer hover:scale-110 transition">
							<AddToWishlist wishlisted={wishlisted} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
