import React, { useReducer, useEffect, useState } from 'react';

const App = (props) => {
  const [synergies, setSynergies] = useState([]);
  console.log(props);

  const fetchPosts = () => {
    Rails.ajax({
      type: 'GET',
      url: '/synergies.json',
      // success: synergies => dispatch({ type: FETCH_POSTS_SUCCESSED, payload: synergies }),
      success: synergies => {
        setSynergies(synergies)
        console.log(synergies);

      },
      error: error => console.log("Error: GET /posts.json", error),
    });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="row m-2">
        Hey there! Here are some flavour pairings that you might like to try!
      </div>
      {synergies.map(synergy => (
        <div>
          <div className="row m-2">
            <div className="col-md-10">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{synergy.title}</h5>
                  <p className="card-text">{synergy.description}</p>
                  <a href="#" className="card-link">Edit</a>
                </div>
            </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;