import { useState } from 'react';
import { useEasybase } from 'easybase-react';
import NoteForm from '../NoteForm';
import styles from '../../styles';

const AddNote = () => {
  const { Frame, sync } = useEasybase();
  const [display, setDisplay] = useState(false);
  const handleClick = ({ title = '', description = '' }) => {
    if (title && description) {
      Frame().push({
        title,
        description,
        createdat: new Date().toISOString(),
      });
      sync();
      toggleNoteForm();
    }
  };

  const toggleNoteForm = () => {
    setDisplay(!display);
  };

  return [
    <NoteForm
      showForm={display}
      toggleForm={toggleNoteForm}
      addNewNote={handleClick}
    />,
    <styles.AddNote className='button is-primary' onClick={toggleNoteForm}>
      Add Note
    </styles.AddNote>,
  ];
};

export default AddNote;
