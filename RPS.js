function player(playChoice) {
  const choices = ["가위", "바위", "보"];

  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(`플레이어 : ${playChoice}`);
  console.log(`컴퓨터 : ${computerChoice}`);

  if (playChoice === computerChoice) {
    console.log("결과는 무승부입니다~!");
  } else if (
    (playChoice === "가위" && computerChoice === "보") ||
    (playChoice === "바위" && computerChoice === "가위") ||
    (playChoice === "보" && computerChoice === "바위")
  ) {
    console.log("이기셨습니다~!");
  } else {
    console.log("패배했습니다 ㅠㅠ");
  }
}

player("바위");
