import React, { useState } from "react";
import DisplayTable from "./DisplayTable";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
              autoFocus={true}
              required
              spellCheck={true}
            />
          </div>

          <button
            onClick={submitHandler}
            type="submit"
            className="ui primary button"
          >
            <i className="github icon" />
            Search
          </button>
          <DisplayTable data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
};

export default Profile;