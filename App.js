import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesDB = {
  horror: [
    {
      name: "Dante's Inferno",
      rating: "7/10",
      desc:
        "Loosely adapted from Dante's Divine Comedy and inspired by the illustrations of Gustav Doré the original silent film has been restored and has a new score by Tangerine Dream."
    },
    {
      name: "The Student of Prague",
      rating: "6.5/10",
      desc:
        "Balduin, a student of Prague, leaves his roystering companions in the beer garden, when he finds he has reached the end of his resources. He is scarcely seated in a quiet corner when a .."
    },
    {
      name: "The Ghost Breaker",
      rating: "5.2/10",
      desc:
        "The treasure of the Aragon family has never been found or any trace of it, until one day, while Princess Maria Theresa is looking over her jewels, she drops the casket and a secret ..."
    }
  ],

  action: [
    {
      name: "The Story of the Kelly Gang ",
      rating: "6.1/10",
      desc: "True story of notorious Australian outlaw Ned Kelly (1855-80)."
    },
    {
      name: "Who Will Marry Mary?",
      rating: "5.7/10",
      desc:
        "Director: Walter Edwin | Stars: Mary Fuller, Ben F. Wilson, Richard Tucker, Harry Beaumont"
    },
    {
      name: "The Hazards of Helen",
      rating: "8.2/10",
      desc:
        "Helen, informed of the danger which menaces an excursion train because another engine on the same track is running wild, mounts a motorcycle and speeds down the track to warn the passengers of their imminent peril."
    }
  ],
  comedy: [
    {
      name: "Salome Mad",
      rating: "4.3/10",
      desc: "A man is obsessed by the 'Salome' dance."
    },
    {
      name: "Quincy Adams Sawyer",
      rating: "7/10",
      desc:
        "A Bostonian acts as a go-between for a foundling and her suitor in the small town of Mason's Corners, learning that the young woman's foster mother has hidden the secret of her parentage."
    },
    {
      name: "Saty delaji cloveka",
      rating: "4.7/10",
      desc:
        "Young lovers Hero and Claudio, soon to wed, conspire to get verbal sparring partners and confirmed singles Benedick and Beatrice to wed as well."
    }
  ],
  romance: [
    {
      name: "Camille ",
      rating: "7.6/10",
      desc:
        "Marguerite is a courtesan in Paris. She falls deeply in love with a young man of promise, Armand Duval. When Armand's father begs her not to ruin his hope of a career and position by .."
    },
    {
      name: " Amor fatal",
      rating: "7.8/10",
      desc:
        "Director: Grigore Brezeanu | Stars: Lucia Sturza-Bulandra, Tony Bulandra, Constantin Neamtu-Ottonel, Aurel Barbelian"
    },
    {
      name: " Nell Gwynne",
      rating: "5/10",
      desc:
        "At the opening of the story, Nell Gwynne, a popular English actress, is seen as an orange girl selling her goods in and around the old Drury Theater. While she is bantering, Lady Olivia .."
    }
  ],
  thriller: [
    {
      name: "Psycho",
      rating: "8.5/10",
      desc:
        "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother."
    },
    {
      name: " Rear Window",
      rating: "8/10",
      desc:
        "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder."
    },
    {
      name: "High and Low",
      rating: "8/10",
      desc:
        "An executive of a shoe company becomes a victim of extortion when his chauffeur's son is kidnapped by mistake and held for ransom"
    }
  ],
  war: [
    {
      name: "The Battle of Trafalgar",
      rating: "7.6/10",
      desc:
        "We show Lord Nelson leaving the admiralty room where he makes his famous speech and then introduce him with his captains giving the details of that wonderful plan of attack which was .."
    },
    {
      name: "The Battle of Gettysburg",
      rating: "7.9/10",
      desc:
        "A young woman's sweetheart fights for the Union, while her brother fights for the Confederates, in the pivotal 1863 battle of the U.S. Civil War."
    },
    {
      name: " The Independence of Romania",
      rating: "8.2/10",
      desc: "The movie depicts the Romanian War of Independence (1877-1878)."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("comedy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span class="span">English</span> Movies{" "}
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Here are some high rated english movies{" "}
      </p>

      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "orange",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "3px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid orange",
                width: "100%",
                margin: "1rem 0rem",
                borderRadius: "5rem"
              }}
            >
              {" "}
              <div
                style={{
                  fontSize: "larger",
                  display: "block",
                  margin: "auto",
                  textAlign: "center"
                }}
              >
                {" "}
                {movie.name}{" "}
              </div>
              <div
                style={{
                  fontSize: "smaller",
                  display: "block",
                  margin: "auto",
                  textAlign: "center"
                }}
              >
                {" "}
                {movie.rating}{" "}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  display: "block",
                  margin: "auto",
                  textAlign: "center"
                }}
              >
                {" "}
                {movie.desc}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
