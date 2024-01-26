<template>
  <div id="app">
    <div class="grid">
      <div v-for="(row, rowIndex) in map" :key="rowIndex" class="row">
        <div v-for="(cell, colIndex) in row" :key="colIndex" class="cell" :class="{ submarine: isSubmarine(rowIndex, colIndex) }">
          {{ cell }}
        </div>
      </div>
    </div>

    <div class="controls">
      <label for="instructions">Enter Instructions:</label>
      <input v-model="instructionInput" type="text" id="instructions" />
      <button @click="executeInstructions">Move Submarine</button>
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
        ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]
      ],
      Start: [1, 1],
      SubMarine: [1, 1],
      End: [8, 2],
      instructionInput: "",
      Instructions: [],
    };
  },
  methods: {
    executeInstructions() {
      this.Instructions = this.parseInstructions();
      this.moveSubmarine();
    },
    parseInstructions() {
      // Assuming the input will be a string containing only N, E, S, W
      return this.instructionInput.split("").map((char) => {
        switch (char.toUpperCase()) {
          case "N":
            return [-1, 0];
          case "E":
            return [0, 1];
          case "S":
            return [1, 0];
          case "W":
            return [0, -1];
          default:
            return [0, 0]; // Ignore invalid characters
        }
      });
    },
    moveSubmarine() {
      for (let i = 0; i < this.Instructions.length; i++) {
        let nextTile = [this.SubMarine[0] + this.Instructions[i][0], this.SubMarine[1] + this.Instructions[i][1]];

        if (this.map[nextTile[0]][nextTile[1]] == " ") {
          this.SubMarine[0] += this.Instructions[i][0];
          this.SubMarine[1] += this.Instructions[i][1];
        } else if (this.map[nextTile[0]][nextTile[1]] == "E") {
          console.log("Vous avez atteint la fin !");
          return;
        } else {
          console.log("Vous avez rencontré un mur !");
          return;
        }
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
