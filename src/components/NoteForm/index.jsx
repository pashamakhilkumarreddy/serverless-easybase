import clsx from 'clsx';
import { useState } from 'react';
import PropTypes from 'prop-types';

const NoteForm = ({ showForm, toggleForm, addNewNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleOnChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'title') {
      setTitle(value);
    } else {
      setDescription(value);
    }
  };
  return (
    <div className={clsx('modal', showForm ? 'is-active' : '')}>
      <div className='modal-background'></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Add a new Note</p>
          <button
            className='delete'
            aria-label='close'
            onClick={toggleForm}></button>
        </header>
        <section className='modal-card-body'>
          <div className='box'>
            <div className='field'>
              <label htmlFor='title' className='label has-text-left'>
                Title*
              </label>
              <div className='control'>
                <input
                  type='text'
                  id='title'
                  name='title'
                  value={title}
                  onChange={handleOnChange}
                  className='input'
                  placeholder='Please enter a title'
                  required
                />
              </div>
            </div>
            <div className='field'>
              <label htmlFor='description' className='label has-text-left'>
                Description*
              </label>
              <div className='control'>
                <input
                  type='text'
                  id='description'
                  name='description'
                  value={description}
                  onChange={handleOnChange}
                  className='input'
                  placeholder='Please enter a description'
                  required
                />
              </div>
            </div>
          </div>
        </section>
        <footer className='modal-card-foot'>
          <button
            className='button is-success'
            onClick={() => {
              addNewNote({ title, description });
              setTitle('');
              setDescription('');
            }}>
            Save
          </button>
          <button className='button' onClick={toggleForm}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

NoteForm.propTypes = {
  showForm: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  addNewNote: PropTypes.func.isRequired,
}

export default NoteForm;
