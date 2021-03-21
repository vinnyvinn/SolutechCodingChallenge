<?php

use Illuminate\Database\Seeder;
use App\Product;
use App\Supplier;
use App\traits\toHashMap;
class ProductsSeeder extends Seeder
{
   use toHashMap;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $product1 = Product::create(['name' =>'Laptops','description'=>'Laptops','quantity'=>'20']);
       $product1->suppliers()->attach(self::items(Supplier::all()->random(2)));
       $product2 = Product::create(['name' =>'Desktops','description'=>'Desktops','quantity'=>'24']);
       $product2->suppliers()->attach(self::items(Supplier::all()->random(3)));
       $product3 = Product::create(['name' =>'Printers','description'=>'Printers','quantity'=>'30']);
       $product3->suppliers()->attach(Supplier::all()->random(1)->first()->id);
       $product4 = Product::create(['name' =>'Mouse','description'=>'Mouse','quantity'=>'42']);
       $product4->suppliers()->attach(self::items(Supplier::all()->random(4)));
       $product5 = Product::create(['name' =>'CPU','description'=>'CPU','quantity'=>'36 pieces']);
       $product5->suppliers()->attach(self::items(Supplier::all()->random(5)));
    }
}
