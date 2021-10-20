import React, { useEffect, useState, useRef } from "react";
import { StyleSheet } from 'react-native';
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   Button,
//   DialogTitle
// } from "@material-ui/core";
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import MatchingCard from "./matchingCard";
import { FlatGrid } from "react-native-super-grid";
// import "./app.scss";

const uniqueCardsArray = [
  {
    type: "Pikachu",
    image: require(`./images/cardinal.png`),
    flipped: false,
  },
  {
    type: "ButterFree",
    image: require(`./images/cardinal.png`),
    flipped: false,
  },
  {
    type: "Charmander",
    image: require(`./images/cardinal.png`),
    flipped: false,
  },
  {
    type: "Squirtle",
    image: require(`./images/cardinal.png`),
    flipped: false,
  },
  {
    type: "Pidgetto",
    image: require(`./images/cardinal.png`),
    flipped: false,
  },
  {
    type: "Bulbasaur",
    image: require(`./images/cardinal.png`),
    flipped: false,
  }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    colContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }
});

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
const PlayMatching = () => {
  const [cards, setCards] = useState(() =>
    shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
//   const [bestScore, setBestScore] = useState(
//     JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
//   );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === uniqueCardsArray.length) {
      setShowModal(true);
    //   const highScore = Math.min(moves, bestScore);
    //   setBestScore(highScore);
    //   localStorage.setItem("bestScore", highScore);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
  };

  return (
    <Layout style={styles.colContainer}>
      <Layout style={styles.rowContainer}>
        {cards.slice(0,3).map((card, index) => {
            let str = `
                <MatchingCard
                    key={index}
                    card={card}
                    index={index}
                    isDisabled={shouldDisableAllCards}
                    isInactive={checkIsInactive(card)}
                    isFlipped={checkIsFlipped(index)}
                    onClick={handleCardClick}
                />`;
            return str;
        })}
      </Layout>
    </Layout>
  );
}

export default PlayMatching;