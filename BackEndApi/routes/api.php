<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/register', 'Api\AuthController@register');
Route::post('/login', 'Api\AuthController@login');
Route::post('/logout','Api\AuthController@logoutApi')->middleware('auth:api');
Route::post('/getUserByToken','Api\AuthController@getUserByToken')->middleware('auth:api');


Route::apiResource('movies', 'Api\MovieController');
Route::get('/movie/search/{name}', 'Api\MovieController@movieSearch');
Route::get('/top/movies/{number?}', 'Api\MovieController@getTopViewedMovies');

