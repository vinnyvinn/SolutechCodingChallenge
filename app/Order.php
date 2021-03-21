<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;

    protected $guarded = [];


    public function products()
    {
        return $this->belongsToMany(Product::class,'order_details')
            ->whereNull('order_details.deleted_at')
            ->withTimestamps();
    }

}
