import "./modal.css";

export default function Modal(props) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {props.children}
        <button onClick={props.close}>X</button>
      </div>
    </div>
  );
}
