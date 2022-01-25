import React from "react";
import "./NewRecipeModal.css";

const NewRecipeModal = ({ show, close, children }) => {
	

	return (
		<>
			{show ? (
				<div className="modalContainer" onClick={() => close()}>
					<div className="modal" onClick={(e) => e.stopPropagation()}>
						<header className="modal_header">
							<h2 className="modal_header-title">Add Your Recipe Here!</h2>
						</header>
						<main className="modal_content">{children}</main>
						<footer className="modal_footer">
							<button className="modal-close" onClick={() => close()}>
								Cancel
							</button>

							{/* <button className="submit">Submit</button> */}
						</footer>
					</div>
				</div>
			) : null}
		</>
	);
};

export default NewRecipeModal;
