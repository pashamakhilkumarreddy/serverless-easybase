import { useEffect } from 'react';
import { useEasybase } from 'easybase-react';
import styles from '../../styles';
import AddNote from '../AddNote';

const Notes = () => {
  const { Frame, sync, configureFrame } = useEasybase();
  useEffect(() => {
    configureFrame({
      tableName: 'REACTSERVERLESS',
      limit: 10,
      offset: 0,
    });
    sync();
  }, []);

  return [
    <div className='columns is-mobile is-centered is-vcentered is-multiline'>
      {
        Frame().length ? Frame().map((ele) => (
          <div className='column is-full' key={ele.createdat}>
            <styles.NotesDiv className='box'>
              <h3 className='is-title'>{ele.title}</h3>
              <p>{ele.description}</p>
              <small>{String(ele.createdat).slice(0, 10)}</small>
            </styles.NotesDiv>
          </div>
        )): (
          <div className='column is-full has-text-centered is-size-3'>
            <h2 className='box'>No notes to display</h2>
          </div>
        )
      }
    </div>,
    <div className='columns is-mobile is-centered is-vcentered'>
      <div className='column is-full has-text-centered'>
        <AddNote />
      </div>
    </div>,
  ];
};

export default Notes;
