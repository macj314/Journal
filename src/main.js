import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Entry} from './entry';

function displayEntry(entry){
  $("#word-count").text("Word Count:" + entry.wordCount());
  $("#vowel-count").text("Vowel Count: " + entry.vowelCounter());
  $("#consonant-count").text("Consonant Count" + entry.consonantCounter());
  $("#get-teaser").text(entry.getTeaser());
}
 
$(document).ready(function(){
  $("#journal-entry").submit(function(event){
    event.preventDefault();
    var entry = new Entry($("#heading").val(), $("#body").val());
    displayEntry(entry);
    $("#heading").val(" ");
    $("#body").val(" ");
  });
});