import React, { Component } from "react";
import ImageCard from "./components/ImageCard/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./images.json";



class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        friends
    };

    removeFriend = id => {
        //add score to state above, get score from state, add one to it, then use it to setstate below

        // Filter this.state.friends for friends with an id not equal to the id being removed
        //const friends = this.state.friends.filter(friend => friend.id !== id);
        let newFriends = [];
        this.state.friends.forEach(friend => {
            let clicked = false;
            if(friend.id === id || friend.clicked === true)
            {
                clicked = true
            }
            let newFriend = {
                name: friend.name,
                image: friend.image,
                id: friend.id,
                clicked
            }

            newFriends.push(newFriend);
        });
        //Below this comment, shuffle the newFriends array

        // Set this.state.friends equal to the new friends array
        this.setState({
            friends: newFriends
            //score
        });
        console.log('remove friend ran and this is the info passed',friends);
    };

    gameOver(){
        alert("You lose.");
    }

    renderCards(){
        return this.state.friends.map(friend => (
            <ImageCard
                removeFriend={this.removeFriend}
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                clicked={null || friend.clicked}
                gameOver={this.gameOver}
            />
        ))
    }

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (
            <Wrapper>
                <Title>Residents of woodcrest</Title>
                {this.renderCards()}
            </Wrapper>
        );
    }
}

export default App;
