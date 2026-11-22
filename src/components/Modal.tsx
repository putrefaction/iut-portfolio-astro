// Exemple de modale en React : l'état "isOpen" décide si la modale est affichée.
import { useState } from 'react';

export default function Modal() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button onClick={() => setIsOpen(true)}>Démo react</button>

			{isOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black/50">
					<div className="bg-white p-6">
						<p>Bonjour depuis React !</p>
						<button onClick={() => setIsOpen(false)}>Fermer</button>
					</div>
				</div>
			)}
		</>
	);
}
