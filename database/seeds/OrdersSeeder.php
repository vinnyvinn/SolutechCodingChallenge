<?php

use Illuminate\Database\Seeder;
use App\Order;
use App\Product;
use App\traits\toHashMap;
class OrdersSeeder extends Seeder
{
    use toHashMap;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $order1 = Order::create(['order_number'=>'odr001']);
        $order1->products()->attach(self::items(Product::all()->random(3)));
        $order2 = Order::create(['order_number'=>'odr002']);
        $order2->products()->attach(self::items(Product::all()->random(4)));
        $order3 = Order::create(['order_number'=>'odr003']);
        $order3->products()->attach(Product::all()->random(1)->first()->id);
        $order4 = Order::create(['order_number'=>'odr004']);
        $order4->products()->attach(self::items(Product::all()->random(2)));
        $order5 = Order::create(['order_number'=>'odr005']);
        $order5->products()->attach(self::items(Product::all()->random(5)));
    }
}
