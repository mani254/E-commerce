"use client";
import ProductCard from "@/components/products/productCard";
import { useState } from "react";

const products = [
	{
		id: 1,
		title: "Luxury Scandinavian Sofa Set",
		price: 8999,
		comparePrice: 12999,
		image: "https://static.vecteezy.com/system/resources/previews/028/207/246/non_2x/hotel-lobby-with-scandinavian-style-furniture-profesionalgrapy-ai-generated-photo.jpg",
		wishlisted: true,
	},
	{
		id: 2,
		title: "Modern Wooden Coffee Table",
		price: 2499,
		comparePrice: 3999,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwEOEQ7dzp1PAgsAe_MWua5aD9ta2VwI0jg&s",
		wishlisted: false,
	},
	{
		id: 3,
		title: "Minimalist Floor Lamp",
		price: 1299,
		comparePrice: 1999,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwEOEQ7dzp1PAgsAe_MWua5aD9ta2VwI0jg&s",
		wishlisted: false,
	},
	{
		id: 4,
		title: "Ergonomic Office Chair",
		price: 4999,
		comparePrice: 6999,
		image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
		wishlisted: true,
	},
	{
		id: 5,
		title: "Vintage Wooden Bookshelf",
		price: 3499,
		comparePrice: 4999,
		image: "https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fwalken-bed-with-storage%2Fupdated%2Fupdated%2Fhoney%2Fnew-logo%2Ffront-honeyy-750x650.jpg",
		wishlisted: false,
	},
	{
		id: 6,
		title: "Smart LED Desk Lamp",
		price: 1899,
		comparePrice: 2499,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwEOEQ7dzp1PAgsAe_MWua5aD9ta2VwI0jg&s",
		wishlisted: true,
	},
	{
		id: 7,
		title: "Minimalist Wall Clock",
		price: 999,
		comparePrice: 1499,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwEOEQ7dzp1PAgsAe_MWua5aD9ta2VwI0jg&s",
		wishlisted: false,
	},
	{
		id: 8,
		title: "Industrial Style Pendant Light",
		price: 3299,
		comparePrice: 4799,
		image: "https://s.alicdn.com/@sc04/kf/H6c53fa44ffe1477fbf4f14b2166c8416J.jpg_720x720q50.jpg",
		wishlisted: true,
	},
	{
		id: 9,
		title: "Cozy Velvet Armchair",
		price: 5599,
		comparePrice: 7999,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmKtQ6urT6Dfe_gBU1KZpgZ1c9qJizxCaXg&s",
		wishlisted: false,
	},
	{
		id: 10,
		title: "Modern Glass Coffee Table",
		price: 4299,
		comparePrice: 5999,
		image: "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/c153799b-2716-4a2d-86a6-e8e4c2efc027/whatsapp-image-2023-02-19-at-11-46-23-pm.jpeg",
		wishlisted: true,
	},
	{
		id: 11,
		title: "Smart Home Speaker",
		price: 2999,
		comparePrice: 3999,
		image: "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/c153799b-2716-4a2d-86a6-e8e4c2efc027/whatsapp-image-2023-02-19-at-11-46-23-pm.jpeg",
		wishlisted: false,
	},
	{
		id: 12,
		title: "Wooden Nightstand",
		price: 2599,
		comparePrice: 3499,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4VLE883MbQact5waYUe-bN3dyd7wUB_FLw&s",
		wishlisted: true,
	},
	{
		id: 13,
		title: "Stylish Bar Stool",
		price: 2299,
		comparePrice: 2999,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XECY_mpmizjTrB_YmNYnnfyF4IYMXeitRw&s",
		wishlisted: false,
	},
	{
		id: 14,
		title: "Luxury Bed Frame",
		price: 7999,
		comparePrice: 10999,
		image: "https://5.imimg.com/data5/SELLER/Default/2023/10/353892505/TK/LN/RC/75941072/straight-modular-kitchen.jpg",
		wishlisted: true,
	},
	{
		id: 15,
		title: "Designer Wall Mirror",
		price: 3499,
		comparePrice: 4499,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjkoTMXPWzj7wkJ9t8V_SHdWl9DGwB4dFkfS3Gz4MFqIhzrmr6l2aXMJsRprbxO0J3fc&usqp=CAU",
		wishlisted: false,
	},
	{
		id: 16,
		title: "Elegant Dining Table",
		price: 9999,
		comparePrice: 13999,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeW21jwoDOVO0E-YQ-wE7TUcWqc37xDSXhTA&s",
		wishlisted: true,
	},
];

const ProductsPage = () => {
	const [layout, setLayout] = useState("vertical");

	return (
		<div className={`grid ${layout === "horizontal" ? "grid-cols-[repeat(auto-fit,minmax(400px,1fr))]" : "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"} gap-6 p-4 place-items-center`}>
			{products.map((product) => (
				<ProductCard key={product.id} title={product.title} price={product.price} comparePrice={product.comparePrice} image={product.image} wishlisted={product.wishlisted} layout={layout} />
			))}
		</div>
	);
};

export default ProductsPage;
