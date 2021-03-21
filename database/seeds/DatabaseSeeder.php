<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(UsersSeeder::class);
         $this->call(SuppliersSeeder::class);
         $this->call(ProductsSeeder::class);
         $this->call(OrdersSeeder::class);
    }
}
