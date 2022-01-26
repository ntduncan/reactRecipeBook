import "./Modal.css";
import { FaWindowClose } from "react-icons/fa";

const Modal = ({ show, close, children }) => {
	return (
		<>
			{show ? (
				<div className="modalContainer" onClick={() => close()}>
					<div className="modal" onClick={(e) => e.stopPropagation()}>
						<header className="modal_header">
							<button className="modal-close" onClick={() => close()}>
								<FaWindowClose size={42}/>
							</button>
						</header>
						<main className="modal_content">{children}</main>
						<footer className="modal_footer"></footer>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Modal;
