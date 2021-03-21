<?php

namespace App\Http\Controllers;

use App\Order;
use App\Product;
use App\Supplier;
use App\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{

    public function index()
    {
        $data = array('orders' => Order::count(),'products'=>Product::count(),'users'=>User::count(),'suppliers'=>Supplier::count());
        return response()->json($data);
    }
}
