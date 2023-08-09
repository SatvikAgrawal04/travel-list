import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
	const [items, setItem] = useState([]);

	function handleAddItem(item) {
		setItem(items => [...items, item]);
	}

	function handleDeleteItem(id) {
		setItem(items => items.filter(item => item.id !== id));
	}

	function handleCheckItem(id) {
		setItem(items =>
			items.map(item =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function handleClearItems() {
		const confirmed = window.confirm(
			"Are you sure you want to delete all items? "
		);

		if (confirmed) setItem(items => (items = []));
	}

	return (
		<div>
			<Logo />
			<Form onAddItems={handleAddItem} />
			<PackingList
				Items={items}
				onDeleteItems={handleDeleteItem}
				onCheckItems={handleCheckItem}
				onClearItems={handleClearItems}
			/>
			<Stats items={items} />
		</div>
	);
}
