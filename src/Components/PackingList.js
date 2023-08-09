import { useState } from "react";
import Item from "./Item";

export default function PackingList({
	Items,
	onDeleteItems,
	onCheckItems,
	onClearItems,
}) {
	const [sortBy, setSortBy] = useState("input");

	let sortedItems;

	if (sortBy === "input") {
		sortedItems = Items;
	}
	if (sortBy === "Description") {
		sortedItems = Items.slice().sort((a, b) =>
			a.description.localeCompare(b.description)
		);
	}
	if (sortBy === "packed") {
		sortedItems = Items.slice().sort(
			(a, b) => Number(a.packed) - Number(b.packed)
		);
	}

	return (
		<div className="list">
			<ul>
				{sortedItems.map(item => (
					<Item
						itemObj={item}
						key={item.id}
						onDeleteItems={onDeleteItems}
						onCheckItems={onCheckItems}
					/>
				))}
			</ul>

			<div className="actions">
				<label>Sort by:</label>
				<select value={sortBy} onChange={e => setSortBy(e.target.value)}>
					<option value="input">input order</option>
					<option value="Description">description</option>
					<option value="packed">Packed Status</option>
				</select>
				<button onClick={onClearItems}>Clear</button>
			</div>
		</div>
	);
}
