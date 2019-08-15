<?php

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

Route::post('/login', 'AuthController@login');

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/books/{user_id}', 'BookController@index');
    Route::get('/me', 'AuthController@me');
    Route::post('/logout', 'AuthController@logout');
});
