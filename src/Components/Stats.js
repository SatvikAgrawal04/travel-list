export default function Stats({ items }) {
	if (!items.length) {
		return (
			<footer className="stats">
				<em>Start adding some items to your packing list</em>
			</footer>
		);
	}

	const numItems = items.length;
	const packedItems = items.filter(item => item.packed).length;
	const percentPacked = Math.round((packedItems / numItems) * 100);
	return (
		<footer className="stats">
			{percentPacked !== 100 ? (
				<em>
					You have {numItems} items on your list, and you have already packed{" "}
					{packedItems}({percentPacked}%)
				</em>
			) : (
				<em>You're all packed</em>
			)}
		</footer>
	);
}
