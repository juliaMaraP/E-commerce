<?php

namespace App\Repositories;

use App\Models\Product;

class ProductRepository
{
    public function getAll()
    {
        return Product::with('category')->paginate(10);
    }

    public function getByCategory($categoryId)
    {
        return Product::where('category_id', $categoryId)->paginate(10);
    }

    public function search($query)
    {
        return Product::where('name', 'like', "%$query%")
            ->orWhere('description', 'like', "%$query%")
            ->paginate(10);
    }

    public function getById($id)
    {
        return Product::with('category')->findOrFail($id);
    }
}
