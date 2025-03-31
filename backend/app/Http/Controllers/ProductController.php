<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    protected $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function index(Request $request)
    {
        $validated = $request->validate([
            'search' => 'nullable|string|max:255',
            'category' => 'nullable|exists:categories,id', 
        ]);

        $query = $request->get('search');
        $categoryId = $request->get('category');
        
        if ($query) {
            $products = $this->productService->search($query);
        } elseif ($categoryId) {
            $products = $this->productService->getByCategory($categoryId);
        } else {
            $products = $this->productService->getAll();
        }

        return response()->json($products);
    }

    public function show($id)
    {
        $product = $this->productService->getById($id);
        return response()->json($product);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:categories,id', 
            'image_url' => 'nullable|url'
        ]);

        $product = Product::create($validated);
        return response()->json($product, 201);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric',
            'category_id' => 'nullable|exists:categories,id',
            'image_url' => 'nullable|url'
        ]);

        $product = Product::findOrFail($id);
        $product->update($validated);
        return response()->json($product);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return response()->json(['message' => 'Produto deletado com sucesso']);
    }
}
