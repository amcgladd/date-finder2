import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import { UserDate } from './backend.js';

//Frontend logic
$(document).ready(function() {
  $("#submit").submit(function(event) {
    event.preventDefault();
    var day = parseInt($("#day-selector").val());
    var month = parseInt($("#month-selector").val());
    var year = parseInt($("#year-selector").val());
    var testDate = new UserDate(day,month,year);
    testDate.findY();
    testDate.findy();
    testDate.findc();
    testDate.getDay();
    testDate.getDayName();
    $(".output").html(testDate.dayName);
  });
});
