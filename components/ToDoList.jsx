import React, {useState} from 'react';
import styles from './ToDoList.module.css';

export default function ToDoList() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
  
    const inputChange = (event) => {
      setText(event.target.value);
    }
  
    const addItem = () => {
      const updatedList = [...list, { text: text, completed: false }];
      setList(updatedList);
      setText('');
    }
  
    const deleteItem = (index) => {
      const updatedList = [...list];
      updatedList.splice(index, 1);
      setList(updatedList);
    }
  
    const itemCheckbox = (index) => {
      const updatedList = [...list];
      updatedList[index].completed = !updatedList[index].completed;
      setList(updatedList);
    }
    
    const deleteChecked = () => {
      const updatedList = list.filter(item => !item.completed);
      setList(updatedList);
    }
    
    return (
      <fieldset>
          <input className={styles.inputToDoList} value={text} onChange={inputChange} />&nbsp;
          <button className={styles.btnToDoList} onClick={addItem}>добавить</button>&nbsp;
          <button className={styles.btnToDoList} onClick={deleteChecked}>Удалить отмеченные</button>
          <h2 className={styles.h2Text}>Список дел:</h2>
          <ol className={styles.textInList}>
            {list.map((item, index) => (
              <li key={index}>
                <input className={styles.btnCheckbox} type="checkbox" checked={item.completed}
                  onChange={() => itemCheckbox(index)}/>
                {item.text}&nbsp;
                <button className={styles.btnDelete} onClick={() => deleteItem(index)}>X</button>
              </li>
            ))}
          </ol>
        </fieldset>
      );
    }