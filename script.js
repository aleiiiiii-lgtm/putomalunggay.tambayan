const defaultAvatar = "assets/default-avatar.png";

// Members
function addMember() {
  const name = document.getElementById("memberName").value.trim();
  const role = document.getElementById("memberRole").value.trim();
  if (!name) return;

  const li = document.createElement("li");
  li.classList.add("card");
  li.innerHTML = `<img src="${defaultAvatar}" class="profile-img"> <b>${name}</b>${role ? " - " + role : ""}`;
  document.getElementById("memberList").appendChild(li);

  document.getElementById("memberName").value = "";
  document.getElementById("memberRole").value = "";
}

// Topics
function addTopic() {
  const topic = document.getElementById("topicInput").value.trim();
  if (!topic) return;
  const li = document.createElement("li");
  li.classList.add("card");
  li.textContent = topic;
  document.getElementById("topicList").appendChild(li);
  document.getElementById("topicInput").value = "";
}

// Schedule
function addSchedule() {
  const topic = document.getElementById("scheduleTopic").value.trim();
  const date = document.getElementById("scheduleDate").value;
  const time = document.getElementById("scheduleTime").value;
  if (!topic || !date || !time) return;

  const div = document.createElement("div");
  div.classList.add("card");
  div.textContent = `${topic} — ${date} at ${time}`;
  document.getElementById("scheduleList").appendChild(div);

  document.getElementById("scheduleTopic").value = "";
  document.getElementById("scheduleDate").value = "";
  document.getElementById("scheduleTime").value = "";
}

// Quiz
function addQuiz() {
  const question = document.getElementById("quizQuestion").value.trim();
  const answer = document.getElementById("quizAnswer").value.trim();
  if (!question || !answer) return;

  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <p><b>Q:</b> ${question}</p>
    <input type="text" placeholder="Your answer">
    <button onclick="checkAnswer(this,'${answer}')">Check</button>
    <p class="feedback"></p>
  `;
  document.getElementById("quizList").appendChild(div);

  document.getElementById("quizQuestion").value = "";
  document.getElementById("quizAnswer").value = "";
}

function checkAnswer(button, correctAnswer) {
  const input = button.previousElementSibling;
  const feedback = button.nextElementSibling;
  if (input.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    feedback.textContent = "✅ Correct!";
    feedback.className = "feedback correct";
  } else {
    feedback.textContent = `❌ Wrong! Correct answer: ${correctAnswer}`;
    feedback.className = "feedback wrong";
  }
}
