<?php

use Illuminate\Database\Seeder;
use App\Supplier;
class SuppliersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Supplier::create(['name'=>'XYZ']);
        Supplier::create(['name'=>'Safaricom']);
        Supplier::create(['name'=>'Airtel']);
        Supplier::create(['name'=>'Orange']);
        Supplier::create(['name'=>'ABC']);
    }
}
