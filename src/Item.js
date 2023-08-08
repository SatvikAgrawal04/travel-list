export default function Item({ itemObj, onDeleteItems, onCheckItems }) {
	return (
		<li>
			<input
				type="checkbox"
				value={itemObj.packed}
				onClick={() => onCheckItems(itemObj.id)}
			/>
			<span className={`${itemObj.packed && "strike"}`}>
				{itemObj.quantity} {itemObj.description}
			</span>
			<button onClick={() => onDeleteItems(itemObj.id)}>❌</button>
		</li>
	);
}
