// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#H2Monday').click(function () {
        $('.dailyMenu').addClass('noDisplay').removeClass('block');
        $('#MondayPage').addClass('block').removeClass('noDisplay');
    });

    $('#H2Tuesday').click(function () {
        $('.dailyMenu').addClass('noDisplay').removeClass('block');
        $('#TuesdayPage').addClass('block').removeClass('noDisplay');
    });

    $('#H2Wednesday').click(function () {
        $('.dailyMenu').addClass('noDisplay').removeClass('block');
        $('#WednesdayPage').addClass('block').removeClass('noDisplay');
    });

    $('#H2Thursday').click(function () {
        $('.dailyMenu').addClass('noDisplay').removeClass('block');
        $('#ThursdayPage').addClass('block').removeClass('noDisplay');
    });

    $('#H2Friday').click(function () {
        $('.dailyMenu').addClass('noDisplay').removeClass('block');
        $('#FridayPage').addClass('block').removeClass('noDisplay');
    });

    $('#H2Saturday').click(function () {
        $('.dailyMenu').addClass('noDisplay').removeClass('block');
        $('#SaturdayPage').addClass('block').removeClass('noDisplay');
    });

    $('#H2Sunday').click(function () {
        $('.dailyMenu').addClass('noDisplay').removeClass('block');
        $('#SundayPage').addClass('block').removeClass('noDisplay');
    });

});
