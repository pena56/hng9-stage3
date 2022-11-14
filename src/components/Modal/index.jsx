import "./style.css";
import { useLayout } from "../../context/LayoutProvider";

export default function Modal({ children, headerTitle }) {
  const { isModalOpen, toggleModal } = useLayout();

  return (
    <div className={`modal ${isModalOpen && "modal_open"}`}>
      <div className="modal_content">
        {headerTitle && (
          <div className="modal_header">
            <h3>{headerTitle}</h3>
            <span className="close" onClick={toggleModal}></span>
          </div>
        )}

        <div className="modal_body">{children}</div>
      </div>
    </div>
  );
}
