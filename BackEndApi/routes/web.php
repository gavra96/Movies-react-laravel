<?php


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/', function (){
    return view('layouts.app');
});
Route::get('/users/api', function (){
    return view('token');
})->name('users.api');
