import { useState } from "react";

const Home = () => {
  const [selected, setSelected] = useState([]);
  const [hobbies, setHobbies] = useState([
    "Running",
    "Cooking",
    "playing sports",
    "Coding",
    "Watching TV",
  ]);
  const [actions, setActions] = useState([]);

  const addToSelected = (e) => {
    const item = e.target.innerText;
    const copy = [...selected, item];
    setSelected(copy);
    const actionCopy = [...actions, `Selecting hobby: ${item}`];
    setActions(actionCopy);
  };
  const addToHobbies = (e) => {
    const item = e.target.value;
    const copy = [...hobbies, item];
    setHobbies(copy);
    const actionCopy = [...actions, `Adding hobby : ${item}`];
    setActions(actionCopy);
  };
  const removeItem = (e) => {
    const hobby = e.target.innerText;
    const index = selected.indexOf(hobby);
    const copy = [...selected];
    copy.splice(index, 1);
    setSelected(copy);
    const actionCopy = [...actions, `Removing hobby : ${hobby}`];
    setActions(actionCopy);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <ul>
            {hobbies.map((hobby) => (
              <li key={hobby} onClick={addToSelected}>
                {hobby}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-6 ">
          <ul>
            {selected.map((hobby) => (
              <li key={hobby} onClick={removeItem}>
                {hobby}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="col block">
          <div>
            <input
              id="input"
              placeholder="Enter a hobby"
              onBlur={addToHobbies}
            />
          </div>
        </div>
        <div className="col-6 ">
          <ul>
            {actions.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
