const Home = () => {
  const hobbies = [
    "Running",
    "Cooking",
    "playing sports",
    "Coding",
    "Watching TV",
  ];
  const selected = ["Running"];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <ul>
            {hobbies.map((hobby) => (
              <li>{hobby}</li>
            ))}
          </ul>
        </div>
        <div className="col-6 ">
          <ul>
            {selected.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="col block">
          <div>
            <input placeholder="Enter a hobby" />
            <button>add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
