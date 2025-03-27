<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function () {
    Route::post('/register', [UserController::class, 'register']);
    Route::post('/login', [UserController::class, 'login']);

    // Use 'auth.jwt' middleware instead of 'auth:sanctum' for JWT authentication
    Route::post('/logout', [UserController::class, 'logout'])->middleware('auth:api');
});
