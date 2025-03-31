<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
Route::get('products', [ProductController::class, 'index']);
Route::get('products/{id}', [ProductController::class, 'show']);
Route::post('products', [ProductController::class, 'store']); 
Route::put('products/{id}', [ProductController::class, 'update']); 
Route::delete('products/{id}', [ProductController::class, 'destroy']);
Route::get('categories', [CategoryController::class, 'index']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
});

