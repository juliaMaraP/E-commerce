<?php

namespace App\Services;

use App\Repositories\ProductRepository;

class ProductService
{
    protected $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function getAll()
    {
        return $this->productRepository->getAll();
    }

    public function getByCategory($categoryId)
    {
        return $this->productRepository->getByCategory($categoryId);
    }

    public function search($query)
    {
        return $this->productRepository->search($query);
    }

    public function getById($id)
    {
        return $this->productRepository->getById($id);
    }
}
