//When a resident casts their vote, the system will be passed the name of the candidate they voted for and the current standings. It will then update the standings, adding the new vote to the count.

//To test the system, we'll need to complete the function castVote(name, votes) that takes in the name of a candidate and an array of tallied votes. The function should return an array with the updated standings.

//We will be testing the system with three possible candidates: Tim, Sally and Beth. Each item in the votes array represents the number of votes for a particular candidate:

//The first item in the array votes[0] are the votes for Tim The second item in the arry votes[1] are the votes for Sally The third item in the array votes[2] are the votes for Beth For example in this array [0, 2, 1] there are 0 votes for Tim, 2 votes for Sally and 1 vote for Beth.
//Hint: ++

//We'll need to start with an if statement to determine who the vote is for. Once we know that we can use the increment operator ++ to increase votes[0] for Tim, votes[1] for Sally or votes[2] for Beth.

//For instance, if name === 'Tim', then we want to increment votes[0]++.
var names = "Sally";
    votes = [
        0,
        2,
        1
    ]
function castVote(names, votes){
    var countVotes = votes;
    if(names === "Tim"){countVotes[0] ++; } 
    else if (names === "Sally"){countVotes[1]++;}
    else if (names === "Beth"){countVotes[2]++;}
    return countVotes;

}

console.log(castVote(names, votes));
