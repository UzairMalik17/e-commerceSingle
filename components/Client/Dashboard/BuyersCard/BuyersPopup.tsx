import React from "react";
interface Props {
  CloseHandler: any;
  reference: any;
}
const BuyersPopup: React.FC<Props> = ({ CloseHandler, reference }) => {
  return (
    <dialog
      ref={reference}
      className="backdrop:bg-black-main backdrop:opacity-30">
      <p>This is an HTML dialog! Click the button to close it.</p>
      <button id="close" onClick={CloseHandler}>
        Close Dialog
      </button>
    </dialog>
  );
};

export default BuyersPopup;
