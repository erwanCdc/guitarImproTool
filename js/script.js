const major_scales = {
    "Ab": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
    "A": ["A", "B", "C#", "D", "E", "F#", "G#"],
    //"A#": ["A#", "B#", "C##", "D#", "E#", "F##", "G##"],
    "Bb": ["Bb", "C", "D", "Eb", "F", "G", "A"],
    "B": ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    //"B#": ["B#", "C##", "D##", "E#", "F##", "G##", "A##"],
    //"Cb": ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
    "C": ["C", "D", "E", "F", "G", "A", "B"],
    "C#": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
    "Db": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
    "D": ["D", "E", "F#", "G", "A", "B", "C#"],
   // "D#": ["D#", "E#", "F##", "G#", "A#", "B#", "C##"], 
    "Eb": ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
    "E": ["E", "F#", "G#", "A", "B", "C#", "D#"],
    //"E#": ["E#", "F##", "G#", "A#", "B#", "C##", "D##"],
    //"Fb": ["Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb"],
    "F": ["F", "G", "A", "Bb", "C", "D", "E"],
    "F#": ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
    "Gb": ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
    "G": ["G", "A", "B", "C", "D", "E", "F#"],
    //"G#": ["G#", "A#", "B#", "D#"]
};

const minor_scales = {
    "Ab": ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"],
    "A": ["A", "B", "C", "D", "E", "F", "G"],
    "A#": ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
    "Bb": ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
    "B": ["B", "C#", "D", "E", "F#", "G", "A"],
    //"B#": ["B#", "C##", "D#", "E#", "F##", "G#", "A#"],
    //"Cb": ["Cb", "Db", "Ebb", "Fb", "Gb", "Abb", "Bbb"],
    "C": ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
    "C#": ["C#", "D#", "E", "F#", "G#", "A", "B"],
    //"Db": ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "Cb"],
    "D": ["D", "E", "F", "G", "A", "Bb", "C"], 
    "D#": ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
    "Eb": ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
    "E": ["E", "F#", "G", "A", "B", "C", "D"],
    //"E#": ["E#", "F##", "G#", "A#", "B#", "C#", "D#"],
    //"Fb": ["Fb", "Gb", "Abb", "Bbb", "Cb", "Dbb", "Eb"]
    "F": ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
    "F#": ["F#", "G#", "A", "B", "C#", "D", "E"],
    "G": ["G", "A", "Bb", "C", "D", "Eb", "F"],
    "G#": ["G#", "A#", "B", "C#", "D#", "E", "F#"],
    
    

}

const major_degrees_sequences = {
    "vi-IV-vi-IV": "./data/img/degrees_sequences/vi-IV-vi-IV.png",
    "I-iii-IV-vi": "./data/img/degrees_sequences/I-iii-IV-vi.png",
    "I-ii-IV-V": "./data/img/degrees_sequences/I-ii-IV-V.png",
    "I-ii-V-I": "./data/img/degrees_sequences/I-ii-V-I.png",
    "I-IV": "./data/img/degrees_sequences/I-IV.png",
    "I-IV-iii-vi": "./data/img/degrees_sequences/I-IV-iii-vi.png",
    "I-IV-V": "./data/img/degrees_sequences/I-IV-V.png",
    "I-V-I": "./data/img/degrees_sequences/I-V-I.png",
    "vi-IV-vi-IV": "./data/img/degrees_sequences/vi-IV-vi-IV.png",
    "vi-V-I-IV": "./data/img/degrees_sequences/vi-V-I-IV.png",
    "vi-V-IV-V": "./data/img/degrees_sequences/vi-V-IV-V.png",
}

const minor_degrees_sequences = {
    "i-iv-v-iv": "./data/img/degrees_sequences/i-iv-v-iv.png",
}

const degrees = {
    "I": 0,
    "i": 0,
    "II": 1,
    "ii": 1,
    "III": 2,
    "iii": 2,
    "IV": 3,
    "iv": 3,
    "V": 4,
    "v": 4,
    "VI": 5,
    "vi": 5,
    "VII": 6,
    "vii": 6
}

const major_harmony = ["", "m", "m", "", "","m", "dim"];

const minor_harmony = ["m", "dim", "", "m", "m", "", ""];

const tones = ["Ab" ,"A", "A#", "Bb", "B", "B#", "Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Gb", "G", "Gb"];

var sequence_image = document.getElementById("sequence_image");
var select_harmonies = document.getElementById("harmonies");
var select_tones = document.getElementById("tones");
var select_degrees_sequence = document.getElementById("degrees_sequences");

var harmony = undefined;
var tone = undefined;
var scale = undefined;
var degree_sequence = undefined;
var chords_sequence = [];

function set_harmony(){
    reset();
    var option = document.createElement('option');
    option.hidden = true;
    select_tones.appendChild(option);

    Object.entries((harmony == "Major" ? major_scales : minor_scales)).forEach((elm) => {
        var option = document.createElement('option');
        option.value = elm[0];
        option.textContent = elm[0];
        select_tones.appendChild(option);
    });

    Object.entries((harmony == "Major") ? major_degrees_sequences : minor_degrees_sequences).forEach((sequence) => {
        var option = document.createElement('option');
        option.value = sequence[0];
        option.textContent = sequence[0];
        select_degrees_sequence.appendChild(option);
    });

    select_tones.disabled = false;

    update();
}

function set_tone_and_scale(){
    var tone = select_tones.options[select_tones.selectedIndex].text;
    scale = (harmony == "Major") ? scale = major_scales[tone] : minor_scales[tone];
    if (chords_sequence.length > 0) set_sequence();
    document.getElementById("degrees_sequences").disabled = false;
    update();
}

function set_sequence(){
    chords_sequence = [];
    sequence_image = document.getElementById("sequence_image");
    degree_sequence = select_degrees_sequence.options[select_degrees_sequence.selectedIndex].text;
    var sequence_path = (harmony == "Major") ? major_degrees_sequences[degree_sequence] : minor_degrees_sequences[degree_sequence];
    sequence_image.src = sequence_path;
    splited_sequence = degree_sequence.split('-');
    splited_sequence.forEach((degree, index) => {
        let num = degrees[degree];
        let chord = scale[num];
        if ((chord.length > 1) && (chord[1] == "#")) {chord = `${chord[0]}%23`} //replace '#' by '%23' for GET query
        chord += (harmony == "Major") ? major_harmony[num] : minor_harmony[num];
        chords_sequence.push(chord);
        
    })
    update();
}

function update(){
    if (chords_sequence) {
        document.getElementById("chords_box").innerHTML = '';
        chords_sequence.forEach((chord) => {
            let chord_image = document.createElement('img');
            chord_image.src = `./data/img/chords/${chord}.png`;
            chord_image.className = "display_img"
            document.getElementById("chords_box").append(chord_image);
        })
    }
}

function reset(){
    document.getElementById("degrees_sequences").disabled = true;
    document.getElementById("sequence_image").src = '';
    document.getElementById("chords_box").innerHTML = '';
    select_tones.innerHTML = '';
    tone = undefined;
    scale = undefined;
    degree_sequence = undefined;
    chords_sequence = [];
    select_degrees_sequence.innerHTML = '';
    var option = document.createElement('option');
    option.hidden = true;
    select_degrees_sequence.appendChild(option);
    harmony = select_harmonies.options[select_harmonies.selectedIndex].text;
}