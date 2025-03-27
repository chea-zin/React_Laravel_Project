<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function () {
    Route::post('user/register', [UserController::class, 'register']);
    Route::post('admin/register', [AdminController::class, 'register']);

    Route::post('user/login', [UserController::class, 'login']);
    Route::post('admin/login', [AdminController::class, 'login']);
    

    // Use 'auth.jwt' middleware instead of 'auth:sanctum' for JWT authentication
    Route::post('user/logout', [UserController::class, 'logout'])->middleware('auth:api');
    Route::post('admin/logout', [AdminController::class, 'logout'])->middleware('auth:admin');
});
