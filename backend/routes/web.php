<?php

use App\Http\Controllers\CardController;
use App\Http\Controllers\SetController;

Route::get('sets', [SetController::class, 'index']);
Route::post('cards', [CardController::class, 'store']);
Route::get('cards', [CardController::class, 'index']);
