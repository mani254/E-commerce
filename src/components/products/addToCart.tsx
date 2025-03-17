import { FaShoppingCart } from "react-icons/fa";

const AddToCart = ({ size = 14, className = "", onClick }: { size?: number; className?: string; onClick?: () => void }) => {
	return (
		<button className={`flex-1 flex items-center justify-center bg-gray-800 text-white py-1 px-3 rounded-md shadow-md hover:bg-gray-900 transition font-medium gap-2 text-sm cursor-pointer ${className}`} onClick={onClick}>
			<FaShoppingCart size={size} /> Add to Cart
		</button>
	);
};

export default AddToCart;
