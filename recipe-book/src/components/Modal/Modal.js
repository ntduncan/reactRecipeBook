import "./Modal.css";

const Modal = ({ show, close, children }) => {
	return (
		<>
			{show ? (
				<div className="modalContainer" onClick={() => close()}>
					<div className="modal" onClick={(e) => e.stopPropagation()}>
						<header className="modal_header">
							<h2 className="modal_header-title">Modal Title</h2>
						</header>
						<main className="modal_content">{children}</main>
						<footer className="modal_footer">
							<button className="modal-close" onClick={() => close()}>
								close
							</button>
						</footer>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Modal;
