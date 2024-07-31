document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const note = document.getElementById("noteInput").value.trim();
    const resultsTableBody = document
      .getElementById("resultsTable")
      .querySelector("tbody");

    
    resultsTableBody.innerHTML = "";

    function buscarNota() {
      const nota = document.getElementById("noteInput").value;
      const notasValidas = [
        "C",
        "C#",
        "Cb",
        "D",
        "D#",
        "Db",
        "E",
        "E#",
        "Eb",
        "F",
        "F#",
        "Fb",
        "G",
        "G#",
        "Gb",
        "A",
        "A#",
        "Ab",
        "B",
        "B#",
        "Bb",
      ];

      if (notasValidas.includes(nota)) {
        alert("Nota válida: " + nota);
      } else {
        alert(
          "Nota inválida. Por favor, digite uma nota em formato válido (C, C#, Cb etc.) ou selecione uma opção."
        );
      }
    }

    const scalesAndChords = getScalesAndChordsForNote(note);

    scalesAndChords.forEach((item) => {
      const row = document.createElement("tr");
      const typeCell = document.createElement("td");
      const speciesCell = document.createElement("td");
      const dispositionCell = document.createElement("td");
      typeCell.textContent = item.type;
      speciesCell.textContent = item.species;
      dispositionCell.textContent = item.disposition.join(", ");
      row.appendChild(typeCell);
      row.appendChild(speciesCell);
      row.appendChild(dispositionCell);
      resultsTableBody.appendChild(row);
    });
  });

function getScalesAndChordsForNote(note) {
  const scaleTemplates = {
    C: {
      Jônica: ["C", "D", "E", "F", "G", "A", "B"],
      Dórica: ["C", "D", "Eb", "F", "G", "A", "Bb"],
      Frígia: ["C", "Db", "Eb", "F", "G", "Ab", "Bb"],
      Lídia: ["C", "D", "E", "F#", "G", "A", "B"],
      Mixolídia: ["C", "D", "E", "F", "G", "A", "Bb"],
      Eólio: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
      Lócrio: ["C", "Db", "Eb", "F", "Gb", "Ab", "Bb"],
      "Menor Harmônica": ["C", "D", "Eb", "F", "G", "Ab", "B"],
      "Menor Melódica": ["C", "D", "Eb", "F", "G", "A", "B"],
      Cromática: [
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
      ],
      Pentatônica: ["C", "D", "E", "G", "A"],
      Hexatônica: ["C", "D", "E", "F#", "G", "A"],
      Hitzazkiar: ["C", "Db", "E", "F", "G", "Ab", "B"],
      Hirajoshi: ["C", "D", "Eb", "G", "Ab"],
    },

    D: {
      Jônica: ["D", "E", "F#", "G", "A", "B", "C#"],
      Dórica: ["D", "E", "F", "G", "A", "B", "C"],
      Frígia: ["D", "Eb", "F", "G", "A", "Bb", "C"],
      Lídia: ["D", "E", "F#", "G#", "A", "B", "C#"],
      Mixolídia: ["D", "E", "F#", "G", "A", "B", "C"],
      Eólio: ["D", "E", "F", "G", "A", "Bb", "C"],
      Lócrio: ["D", "Eb", "F", "G", "Ab", "Bb", "C"],
      "Menor Harmônica": ["D", "E", "F", "G", "A", "Bb", "C#"],
      "Menor Melódica": ["D", "E", "F", "G", "A", "B", "C#"],
      Cromática: [
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
      ],
      Pentatônica: ["D", "E", "F#", "A", "B"],
      Hexatônica: ["D", "E", "F#", "G#", "A", "B"],
      Hitzazkiar: ["D", "Eb", "F#", "G", "A", "Bb", "C#"],
      Hirajoshi: ["D", "E", "F", "A", "Bb"],
    },

    E: {
      Jônica: ["E", "F#", "G#", "A", "B", "C#", "D#"],
      Dórica: ["E", "F#", "G", "A", "B", "C#", "D"],
      Frígia: ["E", "F", "G", "A", "B", "C", "D"],
      Lídia: ["E", "F#", "G#", "A#", "B", "C#", "D#"],
      Mixolídia: ["E", "F#", "G#", "A", "B", "C#", "D"],
      Eólio: ["E", "F#", "G", "A", "B", "C", "D"],
      Lócrio: ["E", "F", "G", "A", "Bb", "C", "D"],
      "Menor Harmônica": ["E", "F#", "G", "A", "B", "C", "D#"],
      "Menor Melódica": ["E", "F#", "G", "A", "B", "C#", "D#"],
      Cromática: [
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
      ],
      Pentatônica: ["E", "F#", "G#", "B", "C#"],
      Hexatônica: ["E", "F#", "G#", "A#", "B", "C#"],
      Hitzazkiar: ["E", "F", "G#", "A", "B", "C", "D#"],
      Hirajoshi: ["E", "F#", "G", "B", "C"],
    },

    F: {
      Jônica: ["F", "G", "A", "Bb", "C", "D", "E"],
      Dórica: ["F", "G", "Ab", "Bb", "C", "D", "Eb"],
      Frígia: ["F", "Gb", "Ab", "Bb", "C", "Db", "Eb"],
      Lídia: ["F", "G", "A", "B", "C", "D", "E"],
      Mixolídia: ["F", "G", "A", "Bb", "C", "D", "Eb"],
      Eólio: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
      Lócrio: ["F", "Gb", "Ab", "Bb", "Cb", "Db", "Eb"],
      "Menor Harmônica": ["F", "G", "Ab", "Bb", "C", "Db", "E"],
      "Menor Melódica": ["F", "G", "Ab", "Bb", "C", "D", "E"],
      Cromática: [
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
      ],
      Pentatônica: ["F", "G", "A", "C", "D"],
      Hexatônica: ["F", "G", "A", "B", "C", "D"],
      Hitzazkiar: ["F", "Gb", "A", "Bb", "C", "Db", "E"],
      Hirajoshi: ["F", "G", "Ab", "C", "Db"],
    },

    G: {
      Jônica: ["G", "A", "B", "C", "D", "E", "F#"],
      Dórica: ["G", "A", "Bb", "C", "D", "E", "F"],
      Frígia: ["G", "Ab", "Bb", "C", "D", "Eb", "F"],
      Lídia: ["G", "A", "B", "C#", "D", "E", "F#"],
      Mixolídia: ["G", "A", "B", "C", "D", "E", "F"],
      Eólio: ["G", "A", "Bb", "C", "D", "Eb", "F"],
      Lócrio: ["G", "Ab", "Bb", "C", "Db", "Eb", "F"],
      "Menor Harmônica": ["G", "A", "Bb", "C", "D", "Eb", "F#"],
      "Menor Melódica": ["G", "A", "Bb", "C", "D", "E", "F#"],
      Cromática: [
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
      ],
      Pentatônica: ["G", "A", "B", "D", "E"],
      Hexatônica: ["G", "A", "B", "C#", "D", "E"],
      Hitzazkiar: ["G", "Ab", "B", "C", "D", "Eb", "F#"],
      Hirajoshi: ["G", "A", "Bb", "D", "Eb"],
    },

    A: {
      Jônica: ["A", "B", "C#", "D", "E", "F#", "G#"],
      Dórica: ["A", "B", "C", "D", "E", "F#", "G"],
      Frígia: ["A", "Bb", "C", "D", "E", "F", "G"],
      Lídia: ["A", "B", "C#", "D#", "E", "F#", "G#"],
      Mixolídia: ["A", "B", "C#", "D", "E", "F#", "G"],
      Eólio: ["A", "B", "C", "D", "E", "F", "G"],
      Lócrio: ["A", "Bb", "C", "D", "Eb", "F", "G"],
      "Menor Harmônica": ["A", "B", "C", "D", "E", "F", "G#"],
      "Menor Melódica": ["A", "B", "C", "D", "E", "F#", "G#"],
      Cromática: [
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
      ],
      Pentatônica: ["A", "B", "C#", "E", "F#"],
      Hexatônica: ["A", "B", "C#", "D#", "E", "F#"],
      Hitzazkiar: ["A", "Bb", "C#", "D", "E", "F", "G#"],
      Hirajoshi: ["A", "B", "C", "E", "F"],
    },
    B: {
      Jônica: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
      Dórica: ["B", "C#", "D", "E", "F#", "G#", "A"],
      Frígia: ["B", "C", "D", "E", "F#", "G", "A"],
      Lídia: ["B", "C#", "D#", "E#", "F#", "G#", "A#"],
      Mixolídia: ["B", "C#", "D#", "E", "F#", "G#", "A"],
      Eólio: ["B", "C#", "D", "E", "F#", "G", "A"],
      Lócrio: ["B", "C", "D", "E", "F", "G", "A"],
      "Menor Harmônica": ["B", "C#", "D", "E", "F#", "G", "A#"],
      "Menor Melódica": ["B", "C#", "D", "E", "F#", "G#", "A#"],
      Cromática: [
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
      ],
      Pentatônica: ["B", "C#", "D#", "F#", "G#"],
      Hexatônica: ["B", "C#", "D#", "E#", "F#", "G#"],
      Hitzazkiar: ["B", "C", "D#", "E", "F#", "G", "A#"],
      Hirajoshi: ["B", "C#", "D", "F#", "G"],
    },

    "C#": {
      Jônica: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
      Dórica: ["C#", "D#", "E", "F#", "G#", "A#", "B"],
      Frígia: ["C#", "D", "E", "F#", "G#", "A", "B"],
      Lídia: ["C#", "D#", "E#", "F##", "G#", "A#", "B#"],
      Mixolídia: ["C#", "D#", "E#", "F#", "G#", "A#", "B"],
      Eólio: ["C#", "D#", "E", "F#", "G#", "A", "B"],
      Lócrio: ["C#", "D", "E", "F", "G#", "A", "B"],
      "Menor Harmônica": ["C#", "D#", "E", "F#", "G#", "A", "B#"],
      "Menor Melódica": ["C#", "D#", "E", "F#", "G#", "A#", "B#"],
      Cromática: [
        "C#",
        "D",
        "D#",
        "E",
        "E#",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "B#",
      ],
      Pentatônica: ["C#", "D#", "E#", "G#", "A#"],
      Hexatônica: ["C#", "D#", "E#", "F##", "G#", "A#"],
      Hitzazkiar: ["C#", "D", "E#", "F#", "G#", "A", "B#"],
      Hirajoshi: ["C#", "D#", "E", "G#", "A"],
    },

    "D#": {
      Jônica: ["D#", "E#", "F##", "G#", "A#", "B#", "C##"],
      Dórica: ["D#", "E#", "F#", "G#", "A#", "B#", "C#"],
      Frígia: ["D#", "E", "F#", "G#", "A#", "B", "C#"],
      Lídia: ["D#", "E#", "F##", "G##", "A#", "B#", "C##"],
      Mixolídia: ["D#", "E#", "F##", "G#", "A#", "B#", "C#"],
      Eólio: ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
      Lócrio: ["D#", "E", "F#", "G#", "A", "B", "C#"],
      "Menor Harmônica": ["D#", "E#", "F#", "G#", "A#", "B", "C##"],
      "Menor Melódica": ["D#", "E#", "F#", "G#", "A#", "B#", "C##"],
      Cromática: [
        "D#",
        "E",
        "E#",
        "F#",
        "F##",
        "G#",
        "A",
        "A#",
        "B",
        "B#",
        "C#",
        "C##",
      ],
      Pentatônica: ["D#", "E#", "F##", "A#", "B#"],
      Hexatônica: ["D#", "E#", "F##", "G##", "A#", "B#"],
      Hitzazkiar: ["D#", "E", "F##", "G#", "A#", "B", "C##"],
      Hirajoshi: ["D#", "E#", "F#", "A#", "B"],
    },

    "E#": {
      Jônica: ["E#", "F##", "G##", "A#", "B#", "C##", "D##"],
      Dórica: ["E#", "F##", "G#", "A#", "B#", "C##", "D#"],
      Frígia: ["E#", "F#", "G#", "A#", "B#", "C#", "D#"],
      Lídia: ["E#", "F##", "G##", "A##", "B#", "C##", "D##"],
      Mixolídia: ["E#", "F##", "G##", "A#", "B#", "C##", "D#"],
      Eólio: ["E#", "F##", "G#", "A#", "B#", "C#", "D#"],
      Lócrio: ["E#", "F#", "G#", "A#", "B", "C#", "D#"],
      "Menor Harmônica": ["E#", "F##", "G#", "A#", "B#", "C#", "D##"],
      "Menor Melódica": ["E#", "F##", "G#", "A#", "B#", "C##", "D##"],
      Cromática: [
        "E#",
        "F",
        "F#",
        "F##",
        "G#",
        "G##",
        "A#",
        "A##",
        "B",
        "B#",
        "C##",
        "D#",
        "D##",
      ],
      Pentatônica: ["E#", "F##", "G##", "B#", "C##"],
      Hexatônica: ["E#", "F##", "G##", "A##", "B#", "C##"],
      Hitzazkiar: ["E#", "F#", "G##", "A#", "B#", "C#", "D##"],
      Hirajoshi: ["E#", "F##", "G#", "B#", "C#"],
    },

    "F#": {
      Jônica: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
      Dórica: ["F#", "G#", "A", "B", "C#", "D#", "E"],
      Frígia: ["F#", "G", "A", "B", "C#", "D", "E"],
      Lídia: ["F#", "G#", "A#", "B#", "C#", "D#", "E#"],
      Mixolídia: ["F#", "G#", "A#", "B", "C#", "D#", "E"],
      Eólio: ["F#", "G#", "A", "B", "C#", "D", "E"],
      Lócrio: ["F#", "G", "A", "B", "C", "D", "E"],
      "Menor Harmônica": ["F#", "G#", "A", "B", "C#", "D", "E#"],
      "Menor Melódica": ["F#", "G#", "A", "B", "C#", "D#", "E#"],
      Cromática: [
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "E#",
      ],
      Pentatônica: ["F#", "G#", "A#", "C#", "D#"],
      Hexatônica: ["F#", "G#", "A#", "B#", "C#", "D#"],
      Hitzazkiar: ["F#", "G", "A#", "B", "C#", "D", "E#"],
      Hirajoshi: ["F#", "G#", "A", "C#", "D"],
    },
    "G#": {
      Jônica: ["G#", "A#", "B#", "C#", "D#", "E#", "F##"],
      Dórica: ["G#", "A#", "B", "C#", "D#", "E#", "F#"],
      Frígia: ["G#", "A", "B", "C#", "D#", "E", "F#"],
      Lídia: ["G#", "A#", "B#", "C##", "D#", "E#", "F##"],
      Mixolídia: ["G#", "A#", "B#", "C#", "D#", "E#", "F#"],
      Eólio: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
      Lócrio: ["G#", "A", "B", "C#", "D", "E", "F#"],
      "Menor Harmônica": ["G#", "A#", "B", "C#", "D#", "E", "F##"],
      "Menor Melódica": ["G#", "A#", "B", "C#", "D#", "E#", "F##"],
      Cromática: [
        "G#",
        "A",
        "A#",
        "B",
        "B#",
        "C#",
        "D",
        "D#",
        "E",
        "E#",
        "F#",
        "F##",
      ],
      Pentatônica: ["G#", "A#", "B#", "D#", "E#"],
      Hexatônica: ["G#", "A#", "B#", "C##", "D#", "E#"],
      Hitzazkiar: ["G#", "A", "B#", "C#", "D#", "E", "F##"],
      Hirajoshi: ["G#", "A#", "B", "D#", "E"],
    },

    "A#": {
      Jônica: ["A#", "B#", "C##", "D#", "E#", "F##", "G##"],
      Dórica: ["A#", "B#", "C#", "D#", "E#", "F##", "G#"],
      Frígia: ["A#", "B", "C#", "D#", "E#", "F#", "G#"],
      Lídia: ["A#", "B#", "C##", "D##", "E#", "F##", "G##"],
      Mixolídia: ["A#", "B#", "C##", "D#", "E#", "F##", "G#"],
      Eólio: ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
      Lócrio: ["A#", "B", "C#", "D#", "E", "F#", "G#"],
      "Menor Harmônica": ["A#", "B#", "C#", "D#", "E#", "F#", "G##"],
      "Menor Melódica": ["A#", "B#", "C#", "D#", "E#", "F##", "G##"],
      Cromática: [
        "A#",
        "B",
        "B#",
        "C#",
        "C##",
        "D#",
        "E",
        "E#",
        "F##",
        "G",
        "G#",
        "G##",
      ],
      Pentatônica: ["A#", "B#", "C##", "E#", "F##"],
      Hexatônica: ["A#", "B#", "C##", "D##", "E#", "F##"],
      Hitzazkiar: ["A#", "B", "C##", "D#", "E#", "F#", "G##"],
      Hirajoshi: ["A#", "B#", "C#", "E#", "F#"],
    },
    "B#": {
      Jônica: ["B#", "C##", "D##", "E#", "F##", "G##", "A##"],
      Dórica: ["B#", "C##", "D#", "E#", "F##", "G##", "A#"],
      Frígia: ["B#", "C#", "D#", "E#", "F##", "G#", "A#"],
      Lídia: ["B#", "C##", "D##", "E##", "F##", "G##", "A##"],
      Mixolídia: ["B#", "C##", "D##", "E#", "F##", "G##", "A#"],
      Eólio: ["B#", "C##", "D#", "E#", "F##", "G#", "A#"],
      Lócrio: ["B#", "C#", "D#", "E#", "F#", "G#", "A#"],
      "Menor Harmônica": ["B#", "C##", "D#", "E#", "F##", "G#", "A##"],
      "Menor Melódica": ["B#", "C##", "D#", "E#", "F##", "G##", "A##"],
      Cromática: [
        "B#",
        "C#",
        "C##",
        "D#",
        "D##",
        "E#",
        "F",
        "F##",
        "G",
        "G##",
        "A#",
        "A##",
      ],
      Pentatônica: ["B#", "C##", "D##", "F##", "G##"],
      Hexatônica: ["B#", "C##", "D##", "E##", "F##", "G##"],
      Hitzazkiar: ["B#", "C#", "D##", "E#", "F##", "G#", "A##"],
      Hirajoshi: ["B#", "C##", "D#", "F##", "G#"],
    },

    Cb: {
      Jônica: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
      Dórica: ["Cb", "Db", "Ebb", "Fb", "Gb", "Ab", "Bbb"],
      Frígia: ["Cb", "Dbb", "Ebb", "Fb", "Gb", "Abb", "Bbb"],
      Lídia: ["Cb", "Db", "Eb", "F", "Gb", "Ab", "Bb"],
      Mixolídia: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bbb"],
      Eólio: ["Cb", "Db", "Ebb", "Fb", "Gb", "Abb", "Bbb"],
      Lócrio: ["Cb", "Dbb", "Ebb", "Fb", "Gbb", "Abb", "Bbb"],
      "Menor Harmônica": ["Cb", "Db", "Ebb", "Fb", "Gb", "Abb", "B"],
      "Menor Melódica": ["Cb", "Db", "Ebb", "Fb", "Gb", "Ab", "B"],
      Cromática: [
        "Cb",
        "C",
        "Db",
        "D",
        "Eb",
        "E",
        "Fb",
        "F",
        "Gb",
        "G",
        "Ab",
        "A",
        "Bb",
        "B",
      ],
      Pentatônica: ["Cb", "Db", "Eb", "Gb", "Ab"],
      Hexatônica: ["Cb", "Db", "Eb", "F", "Gb", "Ab"],
      Hitzazkiar: ["Cb", "Dbb", "Eb", "Fb", "Gb", "Abb", "B"],
      Hirajoshi: ["Cb", "Db", "Ebb", "Gb", "Abb"],
    },
    Db: {
      Jônica: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
      Dórica: ["Db", "Eb", "Fb", "Gb", "Ab", "Bb", "Cb"],
      Frígia: ["Db", "Ebb", "Fb", "Gb", "Ab", "Bbb", "Cb"],
      Lídia: ["Db", "Eb", "F", "G", "Ab", "Bb", "C"],
      Mixolídia: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "Cb"],
      Eólio: ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "Cb"],
      Lócrio: ["Db", "Ebb", "Fb", "Gb", "Abb", "Bbb", "Cb"],
      "Menor Harmônica": ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "C"],
      "Menor Melódica": ["Db", "Eb", "Fb", "Gb", "Ab", "Bb", "C"],
      Cromática: [
        "Db",
        "D",
        "Eb",
        "E",
        "F",
        "Gb",
        "G",
        "Ab",
        "A",
        "Bb",
        "B",
        "C",
      ],
      Pentatônica: ["Db", "Eb", "F", "Ab", "Bb"],
      Hexatônica: ["Db", "Eb", "F", "G", "Ab", "Bb"],
      Hitzazkiar: ["Db", "Ebb", "F", "Gb", "Ab", "Bbb", "C"],
      Hirajoshi: ["Db", "Eb", "Fb", "Ab", "Bbb"],
    },
    Eb: {
      Jônica: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
      Dórica: ["Eb", "F", "Gb", "Ab", "Bb", "C", "Db"],
      Frígia: ["Eb", "Fb", "Gb", "Ab", "Bb", "Cb", "Db"],
      Lídia: ["Eb", "F", "G", "A", "Bb", "C", "D"],
      Mixolídia: ["Eb", "F", "G", "Ab", "Bb", "C", "Db"],
      Eólio: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
      Lócrio: ["Eb", "Fb", "Gb", "Ab", "Bbb", "Cb", "Db"],
      "Menor Harmônica": ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "D"],
      "Menor Melódica": ["Eb", "F", "Gb", "Ab", "Bb", "C", "D"],
      Cromática: [
        "Eb",
        "E",
        "F",
        "Gb",
        "G",
        "Ab",
        "A",
        "Bb",
        "B",
        "C",
        "Db",
        "D",
      ],
      Pentatônica: ["Eb", "F", "G", "Bb", "C"],
      Hexatônica: ["Eb", "F", "G", "A", "Bb", "C"],
      Hitzazkiar: ["Eb", "Fb", "G", "Ab", "Bb", "Cb", "D"],
      Hirajoshi: ["Eb", "F", "Gb", "Bb", "Cb"],
    },
    Fb: {
      Jônica: ["Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb"],
      Dórica: ["Fb", "Gb", "Abb", "Bbb", "Cb", "Db", "Ebb"],
      Frígia: ["Fb", "Gbb", "Abb", "Bbb", "Cb", "Dbb", "Ebb"],
      Lídia: ["Fb", "Gb", "Ab", "Bb", "Cb", "Db", "Eb"],
      Mixolídia: ["Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Ebb"],
      Eólio: ["Fb", "Gb", "Abb", "Bbb", "Cb", "Dbb", "Ebb"],
      Lócrio: ["Fb", "Gbb", "Abb", "Bbb", "Cbb", "Dbb", "Ebb"],
      "Menor Harmônica": ["Fb", "Gb", "Abb", "Bbb", "Cb", "Dbb", "Eb"],
      "Menor Melódica": ["Fb", "Gb", "Abb", "Bbb", "Cb", "Db", "Eb"],
      Cromática: [
        "Fb",
        "F",
        "Gb",
        "G",
        "Ab",
        "A",
        "Bbb",
        "Bb",
        "Cb",
        "C",
        "Db",
        "D",
        "Eb",
      ],
      Pentatônica: ["Fb", "Gb", "Ab", "Cb", "Db"],
      Hexatônica: ["Fb", "Gb", "Ab", "Bb", "Cb", "Db"],
      Hitzazkiar: ["Fb", "Gbb", "Ab", "Bbb", "Cb", "Dbb", "Eb"],
      Hirajoshi: ["Fb", "Gb", "Abb", "Cb", "Dbb"],
    },

    Gb: {
      Jônica: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
      Dórica: ["Gb", "Ab", "Bbb", "Cb", "Db", "Eb", "Fb"],
      Frígia: ["Gb", "Abb", "Bbb", "Cb", "Db", "Ebb", "Fb"],
      Lídia: ["Gb", "Ab", "Bb", "C", "Db", "Eb", "F"],
      Mixolídia: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "Fb"],
      Eólio: ["Gb", "Ab", "Bbb", "Cb", "Db", "Ebb", "Fb"],
      Lócrio: ["Gb", "Abb", "Bbb", "Cb", "Dbb", "Ebb", "Fb"],
      "Menor Harmônica": ["Gb", "Ab", "Bbb", "Cb", "Db", "Ebb", "F"],
      "Menor Melódica": ["Gb", "Ab", "Bbb", "Cb", "Db", "Eb", "F"],
      Cromática: [
        "Gb",
        "G",
        "Ab",
        "A",
        "Bb",
        "B",
        "Cb",
        "C",
        "Db",
        "D",
        "Eb",
        "E",
        "F",
      ],
      Pentatônica: ["Gb", "Ab", "Bb", "Db", "Eb"],
      Hexatônica: ["Gb", "Ab", "Bb", "C", "Db", "Eb"],
      Hitzazkiar: ["Gb", "Abb", "Bb", "Cb", "Db", "Ebb", "F"],
      Hirajoshi: ["Gb", "Ab", "Bbb", "Db", "Ebb"],
    },
    Ab: {
      Jônica: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
      Dórica: ["Ab", "Bb", "Cb", "Db", "Eb", "F", "Gb"],
      Frígia: ["Ab", "Bbb", "Cb", "Db", "Eb", "Fb", "Gb"],
      Lídia: ["Ab", "Bb", "C", "D", "Eb", "F", "G"],
      Mixolídia: ["Ab", "Bb", "C", "Db", "Eb", "F", "Gb"],
      Eólio: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"],
      Lócrio: ["Ab", "Bbb", "Cb", "Db", "Ebb", "Fb", "Gb"],
      "Menor Harmônica": ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "G"],
      "Menor Melódica": ["Ab", "Bb", "Cb", "Db", "Eb", "F", "G"],
      Cromática: [
        "Ab",
        "A",
        "Bb",
        "B",
        "C",
        "Db",
        "D",
        "Eb",
        "E",
        "F",
        "Gb",
        "G",
      ],
      Pentatônica: ["Ab", "Bb", "C", "Eb", "F"],
      Hexatônica: ["Ab", "Bb", "C", "D", "Eb", "F"],
      Hitzazkiar: ["Ab", "Bbb", "C", "Db", "Eb", "Fb", "G"],
      Hirajoshi: ["Ab", "Bb", "Cb", "Eb", "Fb"],
    },

    Bb: {
      Jônica: ["Bb", "C", "D", "Eb", "F", "G", "A"],
      Dórica: ["Bb", "C", "Db", "Eb", "F", "G", "Ab"],
      Frígia: ["Bb", "Cb", "Db", "Eb", "F", "Gb", "Ab"],
      Lídia: ["Bb", "C", "D", "E", "F", "G", "A"],
      Mixolídia: ["Bb", "C", "D", "Eb", "F", "G", "Ab"],
      Eólio: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
      Lócrio: ["Bb", "Cb", "Db", "Eb", "Fb", "Gb", "Ab"],
      "Menor Harmônica": ["Bb", "C", "Db", "Eb", "F", "Gb", "A"],
      "Menor Melódica": ["Bb", "C", "Db", "Eb", "F", "G", "A"],
      Cromática: [
        "Bb",
        "B",
        "C",
        "Db",
        "D",
        "Eb",
        "E",
        "F",
        "Gb",
        "G",
        "Ab",
        "A",
      ],
      Pentatônica: ["Bb", "C", "D", "F", "G"],
      Hexatônica: ["Bb", "C", "D", "E", "F", "G"],
      Hitzazkiar: ["Bb", "Cb", "D", "Eb", "F", "Gb", "A"],
      Hirajoshi: ["Bb", "C", "Db", "F", "Gb"],
    },
  };

  const chordTemplates = {
    C: {
      Maior: ["C", "E", "G"],
      Menor: ["C", "Eb", "G"],
      Diminuto: ["C", "Eb", "Gb"],
      Aumentado: ["C", "E", "G#"],
      "7ª Maior": ["C", "E", "G", "B"],
      "7ª Menor": ["C", "E", "G", "Bb"],
    },
    D: {
      Maior: ["D", "F#", "A"],
      Menor: ["D", "F", "A"],
      Diminuto: ["D", "F", "Ab"],
      Aumentado: ["D", "F#", "A#"],
      "7ª Maior": ["D", "F#", "A", "C#"],
      "7ª Menor": ["D", "F#", "A", "C"],
    },
    E: {
      Maior: ["E", "G#", "B"],
      Menor: ["E", "G", "B"],
      Diminuto: ["E", "G", "Bb"],
      Aumentado: ["E", "G#", "C"],
      "7ª Maior": ["E", "G#", "B", "D#"],
      "7ª Menor": ["E", "G#", "B", "D"],
    },
    F: {
      Maior: ["F", "A", "C"],
      Menor: ["F", "Ab", "C"],
      Diminuto: ["F", "Ab", "Cb"],
      Aumentado: ["F", "A", "C#"],
      "7ª Maior": ["F", "A", "C", "E"],
      "7ª Menor": ["F", "A", "C", "Eb"],
    },
    G: {
      Maior: ["G", "B", "D"],
      Menor: ["G", "Bb", "D"],
      Diminuto: ["G", "Bb", "Db"],
      Aumentado: ["G", "B", "D#"],
      "7ª Maior": ["G", "B", "D", "F#"],
      "7ª Menor": ["G", "B", "D", "F"],
    },
    A: {
      Maior: ["A", "C#", "E"],
      Menor: ["A", "C", "E"],
      Diminuto: ["A", "C", "Eb"],
      Aumentado: ["A", "C#", "E#"],
      "7ª Maior": ["A", "C#", "E", "G#"],
      "7ª Menor": ["A", "C#", "E", "G"],
    },
    B: {
      Maior: ["B", "D#", "F#"],
      Menor: ["B", "D", "F#"],
      Diminuto: ["B", "D", "F"],
      Aumentado: ["B", "D#", "F##"],
      "7ª Maior": ["B", "D#", "F#", "A#"],
      "7ª Menor": ["B", "D#", "F#", "A"],
    },
    "C#": {
      Maior: ["C#", "E#", "G#"],
      Menor: ["C#", "E", "G#"],
      Diminuto: ["C#", "E", "G"],
      Aumentado: ["C#", "E#", "G##"],
      "7ª Maior": ["C#", "E#", "G#", "B#"],
      "7ª Menor": ["C#", "E#", "G#", "B"],
    },
    "D#": {
      Maior: ["D#", "Fx", "A#"],
      Menor: ["D#", "F#", "A#"],
      Diminuto: ["D#", "F#", "A"],
      Aumentado: ["D#", "Fx", "A##"],
      "7ª Maior": ["D#", "Fx", "A#", "Cx"],
      "7ª Menor": ["D#", "Fx", "A#", "C#"],
    },
    "E#": {
      Maior: ["E#", "G##", "B#"],
      Menor: ["E#", "G#", "B#"],
      Diminuto: ["E#", "G#", "B"],
      Aumentado: ["E#", "G##", "B##"],
      "7ª Maior": ["E#", "G##", "B#", "D##"],
      "7ª Menor": ["E#", "G##", "B#", "D#"],
    },
    "F#": {
      Maior: ["F#", "A#", "C#"],
      Menor: ["F#", "A", "C#"],
      Diminuto: ["F#", "A", "C"],
      Aumentado: ["F#", "A#", "C##"],
      "7ª Maior": ["F#", "A#", "C#", "E#"],
      "7ª Menor": ["F#", "A#", "C#", "E"],
    },
    "G#": {
      Maior: ["G#", "B#", "D#"],
      Menor: ["G#", "B", "D#"],
      Diminuto: ["G#", "B", "D"],
      Aumentado: ["G#", "B#", "D##"],
      "7ª Maior": ["G#", "B#", "D#", "F##"],
      "7ª Menor": ["G#", "B#", "D#", "F#"],
    },
    "A#": {
      Maior: ["A#", "C##", "E#"],
      Menor: ["A#", "C#", "E#"],
      Diminuto: ["A#", "C#", "E"],
      Aumentado: ["A#", "C##", "E##"],
      "7ª Maior": ["A#", "C##", "E#", "G##"],
      "7ª Menor": ["A#", "C##", "E#", "G#"],
    },
    "B#": {
      Maior: ["B#", "Dx", "Fx"],
      Menor: ["B#", "D#", "Fx"],
      Diminuto: ["B#", "D#", "F#"],
      Aumentado: ["B#", "Dx", "Fx#"],
      "7ª Maior": ["B#", "Dx", "Fx", "Ax"],
      "7ª Menor": ["B#", "Dx", "Fx", "A#"],
    },
    Cb: {
      Maior: ["Cb", "Eb", "Gb"],
      Menor: ["Cb", "Ebb", "Gb"],
      Diminuto: ["Cb", "Ebb", "Gbb"],
      Aumentado: ["Cb", "Eb", "G"],
      "7ª Maior": ["Cb", "Eb", "Gb", "Bb"],
      "7ª Menor": ["Cb", "Eb", "Gb", "Bbb"],
    },
    Db: {
      Maior: ["Db", "F", "Ab"],
      Menor: ["Db", "Fb", "Ab"],
      Diminuto: ["Db", "Fb", "Abb"],
      Aumentado: ["Db", "F", "A"],
      "7ª Maior": ["Db", "F", "Ab", "C"],
      "7ª Menor": ["Db", "F", "Ab", "Cb"],
    },
    Eb: {
      Maior: ["Eb", "G", "Bb"],
      Menor: ["Eb", "Gb", "Bb"],
      Diminuto: ["Eb", "Gb", "Bbb"],
      Aumentado: ["Eb", "G", "B"],
      "7ª Maior": ["Eb", "G", "Bb", "D"],
      "7ª Menor": ["Eb", "G", "Bb", "Db"],
    },
    Fb: {
      Maior: ["Fb", "Ab", "Cb"],
      Menor: ["Fb", "Abb", "Cb"],
      Diminuto: ["Fb", "Abb", "Cbb"],
      Aumentado: ["Fb", "Ab", "C"],
      "7ª Maior": ["Fb", "Ab", "Cb", "Eb"],
      "7ª Menor": ["Fb", "Ab", "Cb", "Ebb"],
    },
    Gb: {
      Maior: ["Gb", "Bb", "Db"],
      Menor: ["Gb", "Bbb", "Db"],
      Diminuto: ["Gb", "Bbb", "Dbb"],
      Aumentado: ["Gb", "Bb", "D"],
      "7ª Maior": ["Gb", "Bb", "Db", "F"],
      "7ª Menor": ["Gb", "Bb", "Db", "Fb"],
    },
    Ab: {
      Maior: ["Ab", "C", "Eb"],
      Menor: ["Ab", "Cb", "Eb"],
      Diminuto: ["Ab", "Cb", "Ebb"],
      Aumentado: ["Ab", "C", "E"],
      "7ª Maior": ["Ab", "C", "Eb", "G"],
      "7ª Menor": ["Ab", "C", "Eb", "Gb"],
    },
    Bb: {
      Maior: ["Bb", "D", "F"],
      Menor: ["Bb", "Db", "F"],
      Diminuto: ["Bb", "Db", "Fb"],
      Aumentado: ["Bb", "D", "F#"],
      "7ª Maior": ["Bb", "D", "F", "A"],
      "7ª Menor": ["Bb", "D", "F", "Ab"],
    },
  };

  const scalesAndChords = [];

  for (const [species, disposition] of Object.entries(
    scaleTemplates[note] || {}
  )) {
    scalesAndChords.push({
      type: "Escala",
      species: species,
      disposition: disposition,
    });
  }

  for (const [species, disposition] of Object.entries(
    chordTemplates[note] || {}
  )) {
    scalesAndChords.push({
      type: "Acorde",
      species: species,
      disposition: disposition,
    });
  }

  return scalesAndChords;
}