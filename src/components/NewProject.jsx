import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAdd }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enterTitle = title.current.value;
    const enterDescription = description.current.value;
    const enterDate = date.current.value;

    if (
      enterTitle.trim() === '' ||
      enterDescription.trim() === '' ||
      enterDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enterTitle,
      description: enterDescription,
      date: enterDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Hatolaring bor</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50   hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="TItle" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" label="Date" ref={date} />
        </div>
      </div>
    </>
  );
}
