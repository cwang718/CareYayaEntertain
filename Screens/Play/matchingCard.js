import React from "react";
import { StyleSheet } from "react-native"
import { Avatar } from '@ui-kitten/components';
import classnames from "classnames";
// import pokeball from "./images/pokeball.png";
import { ApplicationProvider, Layout, Text, Card } from '@ui-kitten/components';
// import "./card.scss";

const styles = StyleSheet.create({
    card: {

    },
});

const MatchingCard = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <Card
        className={classnames("Card", {
            "is-flipped": isFlipped,
            "is-inactive": isInactive
        })}
        onClick={handleClick}
    >
      <Layout className="card-face card-font-face">
          <Text>Front of card {index}</Text>
        {/* <img src={pokeball} alt="pokeball" /> */}
      </Layout>
      <Layout className="card-face card-back-face">
        <Avatar source={card.image} alt="pokeball" />
        <Text>Back of card {index}</Text>
      </Layout>
    </Card>
  );
};

export default MatchingCard;