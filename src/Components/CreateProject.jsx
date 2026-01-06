import Input from "./LiteComponents/Input";
import Modal from "./LiteComponents/Modal";
import { useRef } from "react";

const CreateProject = ({ onHideCreateForm, addNewProject }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const modalRef = useRef();

  function saveProject() {
    const title = titleRef.current.getValue();
    const description = descRef.current.getValue();
    const date = dateRef.current.getValue();

    if (
      !checkValidity(title) ||
      !checkValidity(description) ||
      !checkValidity(date)
    ) {
      modalRef.current.open();
      return;
    }
    const newProject = {
      title: title,
      description: description,
      date: date,
      tasks: [],
    };

    titleRef.current.resetValue();
    descRef.current.resetValue();
    dateRef.current.resetValue();

    addNewProject(newProject);
  }

  const checkValidity = (value) => !!value && value.trim().length !== 0;

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oop... looks like you forgot to enter a value</p>
        <p className="text-stone-600 mb-4">Please make sure you enter a valid value for every input field.</p>
      </Modal>
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          className="text-stone-800 hover:text-stone-950"
          onClick={onHideCreateForm}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={() => saveProject()}
        >
          Save
        </button>
      </menu>

      <Input ref={titleRef} title="title" type="text" />

      <Input ref={descRef} title="description" type="textarea" />

      <Input ref={dateRef} title="due date" type="date" />
    </>
  );
};

export default CreateProject;
