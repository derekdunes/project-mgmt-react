import Input from "./Input";
import { useRef } from "react";

const CreateProject = ({ onHideCreateForm, addNewProject }) => {
  const titleRef = useRef();

  const descRef = useRef();

  const dateRef = useRef();

  function saveProject() {
    const title = titleRef.current.getValue();
    const description = descRef.current.getValue();
    const date = dateRef.current.getValue();

    if (
      checkValidity(title) &&
      checkValidity(description) &&
      checkValidity(date)
    ) {
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
  }

  const checkValidity = (value) => !!value && value.trim().length !== 0;

  return (
    <>
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
