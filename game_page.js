player1_name = localStorage.getItem("player1_input");
player2_name = localStorage.getItem("player2_input");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - "+ player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    number1 = document.getElementById("number_input1").value;
    number2 = document.getElementById("number_input2").value;
    actual_number = parseInt(number1) * parseInt(number2);
    question_number ="<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : " + "<input type = 'number' id='answer_input' placeholder = 'Enter the answer'>"
    check_button = "<br><br><button type = 'button' onclick = 'check()' class = 'btn btn-info'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("player_output").innerHTML = row;
    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_number)
    {
        if (answer_turn == "player1")
        {
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2_score + 1;
            document.getElementById("player1_score").innerHTML = update_player2_score;
        }
    }
    if (question_turn = "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - "+ player2_name;
    }
    if (question_turn = "player2")
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - "+ player1_name;
    }
    if (answer_turn = "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+ player2_name;
    }
    if (answer_turn = "player2")
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+ player1_name;
    }
}