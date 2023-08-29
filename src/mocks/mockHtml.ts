export default function mockHtml() {
  return `<h1>Bee game</h1>
    <div class="player-input box">
      <label for="playerName">Please enter your name</label>
      <input type="text" name="playerName" id="playerNameInput" />
      <button id="addName">Add name</button>
    </div>
    <div class="game-rules box">
      <h2>Hello, <span id="playerNameOutput">Misterious player</span></h2>
      <p>These are the game rules:</p>
      <ul>
        <li>You have to click on the "Hit" button to hit a be</li>
        <li>
          As the swarm is very agitated you will hit a random bee each time
        </li>
        <li>
          Each bee type has a certain life and takes a certain ammount of damage
        </li>
        <li>Some bee types (eg Queen) are required for the hive to survive</li>
        <li>If a bee that is required for the hive dies, the hive dies</li>
        <li>If all the bees die the hive dies</li>
      </ul>
    </div>
    <div class="box">
      <h2>Game status</h2>
      <p id="statusMessage"></p>
    </div>
    <div class="game-data box">
      <h2>This is your hive:</h2>
      <div id="hive">the hive</div>
    </div>
    <div class="box">
      <h2>Game actions:</h2>
      <button id="hitBee">Hit</button>
      <button id="restartGame" style="display: none">Play another game</button>
    </div>`;
}
