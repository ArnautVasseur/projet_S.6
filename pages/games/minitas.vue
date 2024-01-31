<template>
  <div id="app">
    <div class="grid">
      <div v-for="(row, rowIndex) in map" :key="rowIndex" class="row">
        <div
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          class="cell"
          :class="{ submarine: isSubmarine(rowIndex, colIndex) }"
        >
          {{ cell }}
        </div>
      </div>
    </div>

    <div class="controls">
      <label for="instructions">Select Instructions:</label>
      <select v-model="selectedInstruction" id="instructions">
        <option value="W">West</option>
        <option value="S">South</option>
        <option value="E">East</option>
        <option value="N">North</option>
      </select>
      <button @click="addInstruction">Add Instruction</button>

      <div v-if="instructionList.length > 0">
        <p>Selected Instructions:</p>
        <ul>
          <li v-for="(instruction, index) in instructionList" :key="index">{{ instruction }}</li>
        </ul>
        <button @click="executeInstructions">Move Submarine</button>
        <button @click="clearInstructions">Clear Instructions</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: [
        ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
        ["X", "S", "X", " ", " ", " ", "X", " ", "X", "X"],
        ["X", " ", "X", " ", "X", " ", " ", " ", "E", "X"],
        ["X", " ", "X", " ", " ", "X", "X", "X", " ", "X"],
        ["X", " ", " ", "X", " ", " ", " ", " ", "X", "X"],
        ["X", " ", "X", " ", " ", "X", "X", " ", "X", "X"],
        ["X", " ", " ", "X", "X", " ", " ", " ", " ", "X"],
        ["X", "X", " ", " ", "X", " ", "X", "X", " ", "X"],
        ["X", " ", "X", " ", " ", " ", "X", " ", "X", "X"],
        ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
      ],
      Start: [1, 1],
      SubMarine: [1, 1],
      End: [8, 2],
      selectedInstruction: "",
      instructionList: [],
    };
  },
  methods: {
    addInstruction() {
      if (this.selectedInstruction) {
        this.instructionList.push(this.selectedInstruction);
      }
    },
    clearInstructions() {
      this.instructionList = [];
    },
    async executeInstructions() {
      for (let i = 0; i < this.instructionList.length; i++) {
        await this.moveSubmarineAsync(this.instructionList[i]);
      }

      // Check if the submarine has reached the end
      if (
        this.SubMarine[0] !== this.End[0] ||
        this.SubMarine[1] !== this.End[1]
      ) {
        // Reposition the submarine to the start
        this.SubMarine = [...this.Start];
        this.clearInstructions();
        console.log("Submarine repositioned to the start!");
      }
    },
    async moveSubmarineAsync(instruction) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const movement = this.parseInstruction(instruction);
          let nextTile = [
            this.SubMarine[0] + movement[0],
            this.SubMarine[1] + movement[1],
          ];

          if (this.map[nextTile[0]][nextTile[1]] == " ") {
            this.SubMarine[0] += movement[0];
            this.SubMarine[1] += movement[1];
          } else if (this.map[nextTile[0]][nextTile[1]] == "E") {
            console.log("Vous avez atteint la fin !");
          } else {
            console.log("Vous avez rencontré un mur !");
          }

          resolve();
        }, 500); // Adjust the delay (in milliseconds) as needed
      });
    },
    parseInstruction(instruction) {
      switch (instruction.toUpperCase()) {
        case "W":
          return [-1, 0];
        case "S":
          return [0, 1];
        case "E":
          return [1, 0];
        case "N":
          return [0, -1];
        default:
          return [0, 0];
      }
    },
    isSubmarine(row, col) {
      return row === this.SubMarine[0] && col === this.SubMarine[1];
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(10, 40px);
  gap: 2px;
}

.row {
  display: flex;
  flex-wrap: wrap; /* Ensure that rows wrap to the next line */
}

.cell {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submarine {
  background-color: #3498db;
  color: #fff;
  font-weight: bold;
}

.controls {
  margin-top: 20px;
}
</style>
