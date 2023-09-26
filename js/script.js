const major_scales = {
    "Ab": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
    "A": ["A", "B", "C#", "D", "E", "F#", "G#"],
    //"A#": ["A#", "B#", "C##", "D#", "E#", "F##", "G##"],
    "Bb": ["Bb", "C", "D", "Eb", "F", "G", "A"],
    "B": ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    //"B#": ["B#", "C##", "D##", "E#", "F##", "G##", "A##"],
    "Cb": ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
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
    "I-IV-V": "./data/img/degrees_sequences/I-IV-V.png",
}

const minor_degrees_sequences = {
    "i-VII-VI": "./data/img/degrees_sequences/i-VII-VI.png",
}

const degrees = {
    "I": 0,
    "i": 0,
    "II": 1,
    "ii": 0,
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
var degree_sequence = [];

function init(){

    tones.forEach((tone) => {
        var option = document.createElement('option');
        option.value = tone;
        option.textContent = tone;
        select_tones.appendChild(option);
    })
}


function set_harmony(){
    var selected_option = select_harmonies.options[select_harmonies.selectedIndex].text;
    harmony = selected_option;
    var tones_box = document.getElementById("tones_box");
    tones_box.hidden = false;
    select_degrees_sequence.innerHTML = '';
    sequence_image.src = '';
    var option = document.createElement('option');
    option.hidden = true;
    select_degrees_sequence.appendChild(option);
    if (harmony == "Major"){
        Object.entries(major_degrees_sequences).forEach((sequence) => {
            var option = document.createElement('option');
            option.value = sequence[0];
            option.textContent = sequence[0];
            select_degrees_sequence.appendChild(option);
        });
    }
    else {
        Object.entries(minor_degrees_sequences).forEach((sequence) => {
            var option = document.createElement('option');
            option.value = sequence[0];
            option.textContent = sequence[0];
            select_degrees_sequence.appendChild(option);
        });
    }
    
}

function set_tone_and_scale(){
    var selected_option = select_tones.options[select_tones.selectedIndex].text;
    var tone = selected_option;
    if (harmony == "Major") {scale = major_scales[tone]} else {scale = minor_scales[tone]}
    var degrees_box = document.getElementById("degrees_box");
    degrees_box.hidden = false;
}

function set_sequence(){
    degree_sequence = [];
    sequence_image = document.getElementById("sequence_image");
    var selected_option = select_degrees_sequence.options[select_degrees_sequence.selectedIndex].text;
    if (harmony == "Major") {var sequence_path = (major_degrees_sequences[selected_option])} else {var sequence_path = (minor_degrees_sequences[selected_option])};
    sequence_image.src = sequence_path;
    splited_sequence = selected_option.split('-');
    splited_sequence.forEach((degree, index) => {
        let num = degrees[degree];
        if (harmony == "Major") {
            let chord = scale[num]+major_harmony[num];
            degree_sequence.push(chord);
            let chord_image = document.getElementById(`chord_image${index}`);
            chord_image.src = `./data/img/chords/${chord}.png`;
        } 
        else {
            let chord = scale[num]+minor_harmony[num];
            degree_sequence.push(chord);
            let chord_image = document.getElementById(`chord_image${index}`);
            chord_image.src = `./data/img/chords/${chord}.png`;
        };
    })
    
}

//TODOs : reset chord imgs function and other resets

init();