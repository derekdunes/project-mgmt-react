import Input from './Input';

const CreateProject = ({ onHideCreateForm }) => {

    return (
        <>
            <menu className="flex items-center justify-end gap-4 my-4">
                <button className="text-stone-800 hover:text-stone-950" onClick={onHideCreateForm}>Cancel</button>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </menu>

            <Input title="title" type="text" /> 

            <Input title="description" type="textarea" />

            <Input title="due date" type="date" /> 
        </>
    )

}

export default CreateProject;