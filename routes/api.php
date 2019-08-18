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

Route::group(['middleware' => 'guest:api'], function(){
    Route::post('/login', 'AuthController@login');
});

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/users', 'UserController@create');

    Route::get('/books/all/{user_id}', 'BookController@index');
    Route::post('/books', 'BookController@create');
    Route::patch('/books/{id}', 'BookController@update');
    Route::delete('/books/{id}', 'BookController@destroy');

    Route::get('/me', 'AuthController@me');
    Route::post('/logout', 'AuthController@logout');
});
